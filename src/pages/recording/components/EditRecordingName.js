import React, { useEffect, useState } from 'react';
import {Col, Input, Row} from 'antd';
import {CheckCircleTwoTone, CloseCircleTwoTone, EditOutlined} from "@ant-design/icons";

const EditRecordingName = ({ id, name, recording, putRecording }) => {
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(name);
  }, [name]);

  const submit = () => {
    putRecording({ id, ...recording, subject: input, cb: () =>  { setEdit(false); setInput(input) } });
  };

  const onClickRecordingName = (e) => {
    e.stopPropagation();
    setEdit(true);
  }

  const onChangeRecordingName = ({ target }) => {
    setInput(target.value)
  }

  if (edit) {
    return (<Row gutter={15} justify="start" align="middle">
      <Col>
        <Input style={{ width: 180 }} bordered={false}
               defaultValue={input}
               value={input}
               onPressEnter={submit}
               onChange={onChangeRecordingName}
               onClick={onClickRecordingName}
        />
      </Col>
      <Col>
        <CloseCircleTwoTone
          style={{ fontSize: 25 }}
          onClick={(e) => { e.stopPropagation(); setEdit(false) }}
          twoToneColor="#eb2f96"
        />{' '}
        <CheckCircleTwoTone style={{ fontSize: 25 }} onClick={submit} twoToneColor="#52c41a" />
      </Col>
    </Row>
    );
  }

  return (
    <Row gutter={5}>
      <Col onClick={onClickRecordingName}>{input}</Col>
      <Col>
        <EditOutlined onClick={onClickRecordingName} />
      </Col>
    </Row>
  );
};

export default EditRecordingName;
