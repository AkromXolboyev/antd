// export const ExpandedRowRender = () => {
//     const nestedColumns = [
//       { title: 'Date', dataIndex: 'date', key: 'date' },
//       { title: 'Amount', dataIndex: 'amount', key: 'amount' },
//       { title: 'Type', dataIndex: 'type', key: 'type' },
//       { title: 'Note', dataIndex: 'note', key: 'note' },
//     ];
  
//     const nestedData = [
//       { key: 1, date: '2020-01-01', amount: 120, type: 'income', note: 'Extra data' },
//       // Qo'shimcha data...
//     ];
    
//     return <Table columns={nestedColumns} dataSource={nestedData} pagination={false} />;
//   };
  
//   const TableComponent = () => {
//     return (
//       <div style={{ padding: '24px' }}>
//         <Row>
//           <Col span={24}>
//             <Table
//               dataSource={dataSource}
//               columns={columns}
//               expandable={{ expandedRowRender }}
//               pagination={false}
//             />
//           </Col>
//         </Row>
//       </div>
//     );
//   };
  