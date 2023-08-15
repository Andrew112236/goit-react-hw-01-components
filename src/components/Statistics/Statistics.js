import React from 'react';
import style from './Statistics.module.css';

function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className="title">{title}</h2>}
      <ul className={style.stat_list}>
        {stats.map((stat, index) => (
          <li
            className={style.item}
            key={index}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
