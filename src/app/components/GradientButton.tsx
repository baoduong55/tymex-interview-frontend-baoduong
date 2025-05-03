'use client';

import React from 'react';
import styles from './GradientButton.module.scss';

interface GradientButtonProps {
  onClick?: () => void;
  className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({ onClick, className }) => {
  return (
    <button
      className={`${styles.gradientButton} ${className || ''}`}
      onClick={onClick}
    >
      <div className={styles.arrowIcon}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  );
};

export default GradientButton; 