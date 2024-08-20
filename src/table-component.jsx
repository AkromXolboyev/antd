import React from "react";
import { Table, Row, Col } from "antd";

const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  // Qo'shimcha data kiritish mumkin
];

const columns = [
  {
    title: 'Ism',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Yosh',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Manzil',
    dataIndex: 'address',
    key: 'address',
  },
];

const TableComponent = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Table dataSource={dataSource} columns={columns} />
        </Col>
        <Col span={12}>
          <div style={{ background: '#f0f2f5', padding: '20px' }}>
            <h2>Birinci Tablitsa</h2>
            <Table dataSource={dataSource} columns={columns} pagination={false} />
          </div>
        </Col>
        <Col span={12}>
          <div style={{ background: '#f0f2f5', padding: '20px' }}>
            <h2>Ikkinchi Tablitsa</h2>
            <Table dataSource={dataSource} columns={columns} pagination={false} />
          </div>
        </Col>
        
      </Row>
    </div>
  );
};

export default TableComponent;
