import React, { useEffect } from "react";
import { Input } from "../ui";
import { useParams } from "react-router-dom";
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
  const { documentPreview } = useSelector();

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
    <div>
      <h2>{documentPreview.documentName}</h2>
    </div>
  );
};

export default DocumentPreview;
