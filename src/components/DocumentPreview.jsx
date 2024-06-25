import React, { useEffect } from "react";
import { Input, Select } from "../ui";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getDocumentPreviewFailure,
  getDocumentPreviewStart,
  getDocumentPreviewSucces,
} from "../slice/document";
import DocumentService from "../service/document";

const DocumentPreview = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { documentPreview } = useSelector((state) => state.document);
  const navigate = useNavigate();

  const getDocumentPreview = async () => {
    dispatch(getDocumentPreviewStart());
    const response = DocumentService.getDocumentPreview(id);
    try {
      dispatch(getDocumentPreviewSucces(response));
    } catch (error) {
      dispatch(getDocumentPreviewFailure());
    }
  };
  useEffect(() => {
    getDocumentPreview();
  }, [id]);

  return (
    <div
      className="mx-auto"
      style={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h2>{documentPreview.documentName}Document Title</h2>
      <Input
        label={"Field sequence (weight)"}
        state={documentPreview?.form_values?.field_seq}
        readOnly={true}
      />
      <Select
        label={"Field type"}
        state={documentPreview?.form_values?.field_type}
        disabled={true}
      />
      <Input
        label={"Field name"}
        state={documentPreview?.form_values?.field_name}
        readOnly={true}
      />
      <div>
        <input
          type="checkbox"
          id="a"
          checked={documentPreview?.form_values?.is_mandatory}
          readOnly
        />
        <label htmlFor="a" className="ps-1">
          Mandatory
        </label>
      </div>
      <button
        className="btn btn-primary me-auto mt-2"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
};

export default DocumentPreview;
