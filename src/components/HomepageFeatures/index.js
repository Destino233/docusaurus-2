import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'MC 启动！',
    Svg: require('@site/static/img/ico.svg').default,
    description: (
      <>
        朝樱沐子服务器<code>FAQ生电服</code>由<code>Leaves服务端</code>强劲支持
      </>
    ),
  },
  {
    title: '无限进步',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        加入社区，与来自世界各地的玩家共同讨论
      </>
    ),
  },
  {
    title: 'Powered by Github/Vercel',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        网站现托管在Vercel
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
