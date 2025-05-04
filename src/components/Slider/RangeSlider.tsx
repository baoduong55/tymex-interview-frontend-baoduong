'use client';

import { Slider } from 'antd';
import React from 'react';
import style from './style.module.scss';
import clsx from 'clsx';

type TRangeSliderProps = {
  unit?: string;
  limit?: [number, number];
  onChange?: (values: number[]) => void;
  minValue?: number;
  maxValue?: number;
}

export default function RangeSlider({
  unit = 'ETH',
  limit = [0, 1000],
  minValue = 0,
  maxValue = 1000,
  onChange,
}: TRangeSliderProps) {
  const handleChange = (values: number[]) => {
    onChange?.(values);
  };

  return (
    <div className={clsx(style['custom-slider'], 'w-full px-2 text-white mb-1.5 desktop:mb-3')} >
      <Slider
        tooltip={{
          autoAdjustOverflow: false,
          placement: 'top',
          formatter: (value) => `${value} ${unit}`,

        }}
        styles={{
          rail: { background: '#3a3841', height: '0.5rem' },
          track: {
            background:
              'linear-gradient(90deg, rgb(218 69 143 / 41%) 0.55%, rgb(255 47 178) 50%, rgb(255 47 178) 50%, rgba(218, 52, 221, 0) 102.8%)',
            height: '0.5rem',
          },
          handle: {
            boxShadow: '0 0 1rem 0.1875rem #da40a387',
          },
        }}
        range
        defaultValue={[minValue, maxValue]}
        min={limit[0]}
        max={limit[1]}
        onChangeComplete={handleChange}
      />
      <div className={'flex justify-between'}>
        <div>
          {limit[0]} {unit}
        </div>
        <div>
          {limit[1]} {unit}
        </div>
      </div>
    </div>
  );
}
