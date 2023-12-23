"use client";
import Navbar from "@/components/Home/Navbar";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import FormTextArea from "@/components/forms/FormTextArea";
import { useMovieCreateMutation } from "@/redux/api/moviesApi";
import { useUserQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const Addmovie = () => {
  const { userId } = getUserInfo() as any;
  const { data } = useUserQuery(userId);
  const router = useRouter();
  const [movieCreate] = useMovieCreateMutation();

  const onSubmit = async (values: any) => {
    const movieData = {
      name: values.name,
      creator: values.creator,
      des: values.des,
      mainImg: values.mainImg,
      secendImg: values.secendImg,
      author: data._id,
    };
    try {
      const res = await movieCreate(movieData).unwrap();
      if (res?._id) {
        message.success("Movie created successfully!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="max-w-[1200px] mx-auto py-10">
        <h1 className="text-3xl">Create Movie</h1>
        <Form submitHandler={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Movie Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="name"
                  size="large"
                  label="Movie Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="mainImg"
                  size="large"
                  label="Main Poster Link"
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="secendImg"
                  size="large"
                  label="Cover Image Link"
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="creator"
                  size="large"
                  label="Movie Creator Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormTextArea name="des" label="Movie Description" />
              </Col>
            </Row>
          </div>

          <Button className="bg-blue-500" type="primary" htmlType="submit">
            create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Addmovie;
