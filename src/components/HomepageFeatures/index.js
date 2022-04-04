import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Open source and free',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          DuoCash is Open source (MIT Licensed) and free to use.
          No more paying shady websites for lockers and hoping its safe.
      </>
    ),
  },
  {
    title: 'Trustless and extensible',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          The DuoCash contracts are completely trustless, only the owner of a locker can access it.
          There is no way for us to stop anyone from using DuoCash.
      </>
    ),
  },
  {
    title: 'Support for many assets',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      If you can transfer it, DuoCash can lock it. With support for <code>ERC20</code>, <code>ERC173</code>, <code>ERC721</code>, <code>ERC777</code>, <code>ERC1155</code> and lots more.
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
