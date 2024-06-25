import React from "react";
import { Input, Select } from "../ui";

const AddForm = (props) => {
  const {
    title,
    setTitle,
    fieldSequence,
    setFieldSequence,
    fieldType,
    setFieldType,
    fieldName,
    setFieldName,
    mandatory,
    setMandatory,
  } = props;

  return (
    <div>
      <form action="">
        <Input label={"Document Title"} state={title} setState={setTitle} />
        <hr />
        <Input
          label={"Field sequence (weight)"}
          state={fieldSequence}
          setState={setFieldSequence}
        />
        <Select label={"Field type"} />
        <Input label={"Field name"} state={fieldName} setState={setFieldName} />
        <input
          type="checkbox"
          id="a"
          onChange={(e) => setMandatory(e.target.value)}
          checked={mandatory}
        />
        <label htmlFor="a">Mandatory</label>
        <hr />
      </form>
    </div>
  );
};

export default AddForm;
