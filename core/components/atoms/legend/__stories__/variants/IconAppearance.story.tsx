import * as React from 'react';
import Legend from '../../Legend';

// CSF format story
export const iconAppearance = () => {
  const appearances = [
    'primary',
    'secondary',
    'success',
    'alert',
    'warning',
    'accent1',
    'accent2',
    'accent3',
    'accent4',
    'inverse',
  ];

  return (
    <div>
      {
        appearances.map((appearance, i) => {
          return (
            <div key={i} className="mb-4">
              <Legend iconAppearance={appearance}>
                {appearance.charAt(0).toUpperCase() + appearance.slice(1)}
              </Legend>
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Atoms|Legend/Variants',
  component: Legend,
  parameters: {
    docs: {
      docPage: {
        title: 'Legend'
      }
    }
  }
};
