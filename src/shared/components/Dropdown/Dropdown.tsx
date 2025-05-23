/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown as AntdDropdown, Button, } from 'antd';
import style from './style.module.scss';

type TDropdownProps = {
  items: { key: string | null, label: string }[];
  value: any;
  onChange: (value: any) => void;
}

export default function Dropdown({ items = [], value, onChange }: TDropdownProps) {
  const item: any = items.find((i) => i?.key === value) || items[0];
  const onSelect = (key: string) => {
    onChange(key);
  }
  return (
    <span className={style.dropdown}>
      <AntdDropdown menu={{ items: items as any, onClick: (info) => onSelect(info.key) }} trigger={['click']} >
        <Button>
          {item?.label}
          <DownOutlined />
        </Button>
      </AntdDropdown>
    </span>
  );
}
