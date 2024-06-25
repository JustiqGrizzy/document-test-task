import React, { useState } from "react";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  postDocumentFailure,
  postDocumentStart,
  postDocumentSucces,
  postDocumentSuccess,
} from "../slice/document";
import DocumentService from "../service/document";

const CreateDocument = () => {
  const [title, setTitle] = useState("");
  const [forms, setForms] = useState([
    {
      fieldSequence: "",
      fieldType: null,
      fieldName: "",
      mandatory: true,
    },
  ]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();
    const document = {}; // I will locate data to the columns needed
    dispatch(postDocumentStart());
    try {
      await DocumentService.postDocument(document);
      dispatch(postDocumentSucces());
      navigate("/");
    } catch (error) {
      dispatch(postDocumentFailure());
    }
  };

  const handleAdding = () => {
    setForms([
      ...forms,
      { fieldSequence: "", fieldType: null, fieldName: "", mandatory: true },
    ]);
  };

  const handleFormChange = (index, field, value) => {
    const newForms = [...forms];
    newForms[index][field] = value;
    setForms(newForms);
  };

  return (
    <div className="w-50">
      {forms.map((form, index) => (
        <AddForm
          key={index}
          fieldSequence={form.fieldSequence}
          setFieldSequence={(value) =>
            handleFormChange(index, "fieldSequence", value)
          }
          fieldType={form.fieldType}
          setFieldType={(value) => handleFormChange(index, "fieldType", value)}
          fieldName={form.fieldName}
          setFieldName={(value) => handleFormChange(index, "fieldName", value)}
          mandatory={form.mandatory}
          setMandatory={(value) => handleFormChange(index, "mandatory", value)}
        />
      ))}
      <div className="d-flex">
        <button className="btn btn-secondary" onClick={handleAdding}>
          Add more
        </button>
        <button className="btn btn-primary ms-auto" onClick={formSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateDocument;
