import React, { useState } from "react";
import ReactDom from "react-dom";
import Modal from "./components/modal/modal";
import Upload from "./components/upload/upload";
import Tab from "./components/tab/tab";
import Tabel from "./components/table/table";
import * as GOJI from "goji_ui";

function App() {
  const [visible, setVisible] = useState(false);
  const [ev, setEv] = useState(false);
  const data = [
    {
      id: 1,
      applyTime: "2023-3-24",
      name: "郭斐靓",
      age: 24,
      sex: "男",
      workAge: 3,
    },
    {
      id: 2,
      applyTime: "2023-3-24",
      name: "小王",
      age: 25,
      sex: "男",
      workAge: 3,
    },
    {
      id: 3,
      applyTime: "2023-3-24",
      name: "小郑",
      age: 22,
      sex: "男",
      workAge: 3,
    },
    {
      id: 4,
      applyTime: "2023-3-24",
      name: "小白",
      age: 21,
      sex: "男",
      workAge: 3,
    },
    {
      id: 5,
      applyTime: "2023-3-24",
      name: "小张",
      age: 18,
      sex: "男",
      workAge: 3,
    },
    {
      id: 6,
      applyTime: "2023-3-24",
      name: "小黑",
      age: 16,
      sex: "男",
      workAge: 3,
    },
  ];
  const cols = [
    {
      title: "面试申请时间",
      dataIndex: "applyTime",
      key: "applyTime",
      width: 150,
      sorter: true,
    },
    {
      title: "面试者姓名",
      dataIndex: "name",
      key: "name",
      width: 150,
    },
    {
      title: "性别",
      dataIndex: "sex",
      key: "sex",
      width: 150,
      sorter: true,
    },
    {
      title: "面试者年龄",
      dataIndex: "age",
      key: "age",
      width: 150,
      sorter: true,
    },
    {
      title: "面试者工龄",
      dataIndex: "workAge",
      key: "workAge",
      width: 150,
      sorter: true,
    },
  ];
  return (
    <div>
      {/* <GOJI.Tab
			extSelector={'.tab'}
			extension={<div>这是扩展的内容</div>}
			items={[
				{
					title: "tab1",
					key: "tab1",
					children: <div>test</div>
				},
				{
					title: "tab2",
					key: "tab2",
					children: <div>tab2</div>
				}
			]}
		/> */}
      <div>
        <Tabel data={data} cols={cols} />
      </div>
      {/* 
		<h1>test</h1>
		<button
			onClick={() => {
				setVisible(true)
			}}
		>
			show modal
		</button>
		<Tab
			onTabChange={() => {
				setEv(true)
			}}
			hiddenStyle={{
				height: '0px',
				overflow: 'hidden'
			}}
			tabContentVisible={ev}
			extSelector={'[aria-label="tab"]'}
			extension={<div onClick={() => { setEv(!ev) }} className="ext">这是扩展的内容</div>}
			items={[
				{
					title: "tab1",
					key: "tab1",
					children: <div>tab1</div>
				},
				{
					title: "tab2",
					key: "tab2",
					children: <div>tab2</div>
				}
			]}
		/>

		<Modal
			// dontDestroyOnClose={true}
			onClose={() => {
				setVisible(false)
			}}
			visible={visible}
		>
			<div>
				how to set default value for typescript interface field
				<input type="text" />
			</div>
		</Modal>

		<Upload
			uploadUrl='/api/video-service/upload'
			beforeUpload={(f) => {
				for (var i = 0; i < f.length; i++) {
					console.log(f[i].name)
				}
				return new Promise((r, j) => {
					setTimeout(() => {
						r(f)
					}, 1000);
				})
			}}

			valueFilter={({ response }) => {
				return (response as Record<string, Object>).url
			}}
			onComplete={(res: any[]) => {
				console.log(res)
			}}
		>
			请选择文件
		</Upload> */}
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("app"));
