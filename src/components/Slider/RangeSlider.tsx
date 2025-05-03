'use client';

import { Slider } from 'antd';
import React from 'react';
import style from './style.module.scss';
import clsx from 'clsx';

type TRangeSliderProps = {
  unit?: string;
  minValue?: number;
  maxValue?: number;
  onChange?: (values: number[]) => void;
  min?: number;
  max?: number;
}

export default function RangeSlider({
  unit = 'ETH',
  minValue = 0,
  maxValue = 1000,
  onChange,
  min = 0,
  max = 1000,
}: TRangeSliderProps) {
  const handleChange = (values: number[]) => {
    onChange?.(values);
  };

  return (
    <div className={clsx(style['custom-slider'], 'w-full px-2 text-white mb-1.5 desktop:mb-3')}>
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
        min={min}
        max={max}
        onChangeComplete={handleChange}
      />
      <div className={'flex justify-between'}>
        <div>
          {min} {unit}
        </div>
        <div>
          {max} {unit}
        </div>
      </div>
    </div>
  );
}
