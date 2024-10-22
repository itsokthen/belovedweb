import React from "react";

interface PageLayoutProps {
  title: string;
  content: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, content }) => {
  return (
    <div className="mx-10 my-10">
      <h1 className="font-bold text-altSec mb-10">{title}</h1>
      <div className="page-layout">{content}</div>
    </div>
  );
};

export default PageLayout;
