import { ErrorMessage, FieldArray } from "formik";
import React, { useEffect, useState } from "react";
import {
    Button,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalHeader,
    Row,
} from "reactstrap";
import TextError from "../../components/Error/TextError";



export default function AddProductModal(props: any) {
    const [images, setImages] = useState<string[]>([]);
    const [date, setDate] = useState({
        payment_date: ""
    })
    const [file_name, setFileName] = useState("")
    const handleFilechange = (e: any, values: any) => {
        const myMemoObj = URL.createObjectURL(e.target.files[0]);
        setImages([...images, myMemoObj]);
        props?.setFieldValue("file", e.target.files[0]);
        setFileName(e.target.files[0]?.name)
    }
    const handleDeletes = (img: any, indexs: number) => {
        props?.setFieldValue(
            "file",
            props?.values.file
        );
        const s1 = images?.filter((key, index) => index !== indexs);
        setImages(s1);
    };


    return (<>
        <React.Fragment>
            <Modal
                className="modal-outer"
                isOpen={props?.isShowing}
                style={{ maxWidth: "880px" }}
            >
                <ModalHeader
                    toggle={() => {
                        props?.setIsShowing(false);
                        props?.handleReset();
                        setImages([]);

                    }}
                    className=""
                >
                    Add Product
                </ModalHeader>
                <ModalBody className="px-5 pb-5">
                    <Form>

                        <Col md={12}>
                            <FormGroup>
                                <Label>
                                    Upload the Product{" "}
                                    <i
                                        className="fa fa-asterisk required-field"
                                        color="text-danger"
                                        aria-hidden="true"
                                    ></i>
                                </Label>
                                <div className="image-upload-input">
                                    <Input
                                        type="file"
                                        name="file"
                                        accept=".png, .jpg, .jpeg, .pdf"
                                        //disabled={props?.show_add == true ? false : true}
                                        title=""
                                        multiple
                                        onChange={(e: any) =>
                                            handleFilechange(e, e.target.files[0])

                                        }
                                        className={`form-control ${props?.touched.file && props?.errors.file
                                            ? "is-invalid"
                                            : ""
                                            }`}
                                    />
                                    <span className="upload-text">Upload the Documnte(s)</span>
                                </div>
                                {/* <ErrorMessage name="file" component={TextError} /> */}
                                <span className="text-danger">{props?.errors?.file}</span>
                            </FormGroup>
                        </Col>
                        <Col md={12}>
                            <div className="display-upload-image-wrap">
                                {images?.length > 0 &&
                                    images.map((item, index, key) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <div className="display-image" key={index}>
                                                    <i
                                                        className="fa-solid fa-xmark "
                                                        onClick={() => handleDeletes(item, index)}
                                                        title="Remove photo"
                                                    ></i>
                                                    <img src={item} alt="" className="img-fluid " />
                                                </div>
                                            </React.Fragment>
                                        );
                                    })}
                            </div>
                        </Col>

                        <Col md={4} sm={6}>
                            <FormGroup>
                                <Label>
                                    Product name{" "}
                                    <i
                                        className="fa fa-asterisk fa-1 required-field"
                                        color="text-danger"
                                        aria-hidden="true"
                                    ></i>
                                </Label>
                                <Input
                                    name="product_name"
                                    type="text"
                                    value={props?.values?.product_name}
                                    onChange={props?.handleChange}

                                    className={`form-control ${props?.touched.product_name &&
                                        props?.errors.product_name
                                        ? "is-invalid"
                                        : ""
                                        }`}
                                />
                                <span className="text-danger">{props?.errors?.product_name}</span>

                            </FormGroup>
                        </Col>
                        <div className="button-flex">
                            <FormGroup>
                                <Button
                                    type="submit"
                                    color="primary"
                                    onClick={props?.handleSubmit}
                                    className={"px-5 mt-5"}
                                    disabled={props?.isSubmitting}
                                >
                                    Save
                                </Button>
                            </FormGroup>

                        </div>
                    </Form>
                </ModalBody>

            </Modal>

        </React.Fragment>

    </>)
}