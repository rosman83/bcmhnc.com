import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

const markdown_init = `
# Data Analysis Toolkit
Tools used for Head and Neck Cancer research at Baylor College of Medicine, with a goal of condensing time-consuming manual pipelines of data analysis methods into one click scanning processes.

[Download Latest Release](https://github.com/rosman83/bcmhnc-toolkit/releases "download")

![image](https://bcmhnc.com/preview.png)

## How to Use

Download the latest open source release for your platform [here](https://github.com/rosman83/bcmhnc-toolkit/releases "download"), and run the program installer, application will automatically alert you to updates in the future.

## Brief Pipeline Summary

Input genetic result files from assorted folder and assign groups to obtain combined spreadsheet of statistical tests, adjusted for error.

Pipeline consists of recursively scanning all input files to support various genetic data folder schemas, asking user to label testing groups.Data is filtered for existing genes based on lookup list, and transformed into linear and log space data.

Further normalization is carried out in preparation for Benjamini - Hochberg Procedure.Procedure used calculating fold changes and p values for significant genes via a user defined threshold.
`;

function Toolkit() {
  const [markdown, setMarkdown] = useState(markdown_init);

  return (
    <div className='blog'>
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={
          {
            h1: ({ node, ...props }) => <h1 className='text-3xl font-bold' {...props} />,
            h2: ({ node, ...props }) => <h2 className='text-2xl font-bold' {...props} />,
            h3: ({ node, ...props }) => <h3 className='text-xl font-bold' {...props} />,
            h4: ({ node, ...props }) => <h4 className='text-lg font-bold' {...props} />,
            h5: ({ node, ...props }) => <h5 className='text-base font-bold' {...props} />,
            h6: ({ node, ...props }) => <h6 className='text-sm font-bold' {...props} />,
            p: ({ node, ...props }) => <p className='text-base' {...props} />,
            a: ({ node, ...props }) => <a className='text-blue-400 hover:underline' {...props} />,
            ul: ({ node, ...props }) => <ul className='list-disc list-inside' {...props} />,
            ol: ({ node, ...props }) => <ol className='list-decimal list-inside' {...props} />,
            li: ({ node, ...props }) => <li className='text-base' {...props} />,
            table: ({ node, ...props }) => <table className='table-auto' {...props} />,
            thead: ({ node, ...props }) => <thead className='bg-gray-200' {...props} />,
          }}
      />
    </div>
  )
}

export default Toolkit;