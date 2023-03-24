import React, { ReactElement, useMemo, useRef, useState } from "react";
import styles from "./table.module.less";
interface IColProps {
  key: string;
  title: string;
  dataIndex: string;
  width?: number;
  sorter?: boolean;
  render?(data: any): ReactElement;
}

interface ITableProps {
  className?: string;
  data: Array<any>;
  cols: Array<IColProps>;
}

export default function Table(props: ITableProps) {
  const { data, cols, className } = props;
  const [datas, setDatas] = useState(() => {
    return data;
  });
  const [value, setValue] = useState();

  const refValue = useRef();
  const col = useMemo(() => {
    return cols?.map((c) => {
      return <td key={c?.key}>{c?.title}</td>;
    });
  }, [cols]);

  return (
    <>
      <table border={1} className={styles?.table}>
        <thead>
          <tr>{col}</tr>
        </thead>
        <tbody>
          {datas.length > 0 ? (
            <>
              {datas?.map((d) => {
                return (
                  <tr key={d.id}>
                    {cols?.map((c) => {
                      if (c.render) {
                        return <td key={c.key}>{c.render(d)}</td>;
                      }
                      return <td key={c.key}>{d[c.key]}</td>;
                    })}
                  </tr>
                );
              })}
            </>
          ) : (
            <div>暂无数据</div>
          )}
        </tbody>
      </table>

      <button
        onClick={() => {
          const va = data.slice().sort(function (a, b) {
            return a.age - b.age;
          });
          setDatas(va);
        }}
      >
        点击年龄排序升序
      </button>
      <button
        onClick={() => {
          const va = data.slice().sort(function (a, b) {
            return b.age - a.age;
          });
          setDatas(va);
        }}
      >
        点击年龄排序降序
      </button>
      <div>
        请输入姓名：
        <input ref={refValue}></input>
        <button
          onClick={() => {
            if (refValue?.current?.value) {
              const va = data?.filter((item) => {
                if (item.name == refValue?.current?.value) {
                  return true;
                } else {
                  return false;
                }
              });
              setDatas(va);
            } else {
              alert("请输入值");
            }
          }}
        >
          筛选
        </button>
        <button
          onClick={() => {
            setDatas(data);
          }}
        >
          重置
        </button>
      </div>
    </>
  );
}
