import React from 'react';

type ITypographyProps = {
  text: string | React.ReactNode;
  className?: string;
}

function Typography({ text, className }: ITypographyProps) {
  return (
    <div className={className}>
      {text}
    </div>
  );
}

export default Typography;
