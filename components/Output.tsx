import { LoaderIcon } from 'lucide-react'
import React from 'react'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import { MemoizedReactMarkdown } from './markdown'

const Output = ({
    loading,
    aioutput,
}: any) => {
    return (
            <div className="flex flex-1 flex-col items-center justify-center space-y-4">
                {loading ? (
                    <div className="space-y-2 text-center">
                        <div className="flex items-center justify-center space-x-1.5">
                            <LoaderIcon className="h-4 w-4 animate-spin" />
                            <h1 className="text-xl">WhyMe Is Generating Content</h1>
                        </div>
                        <p className="text-sm">
                            Loading ....
                        </p>
                    </div>
                ) : aioutput ? (
                    <div className="flex flex-1 flex-col px-2 xl:px-4 ">
                        <div className="px-2 py-4 xl:px-3 xl:py-7">
                            <div className="hidden flex-1 flex-col lg:flex">
                                <div className="flex flex-1 flex-col items-center justify-center space-y-4">
                                    <MemoizedReactMarkdown
                                        className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
                                        remarkPlugins={[remarkGfm, remarkMath]}
                                        components={{
                                            p({ children }) {
                                                return <p className="mb-2 last:mb-0">{children}</p>
                                            },
                                        }}
                                    >
                                        {aioutput}
                                    </MemoizedReactMarkdown>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-2 text-center">
                        <div className="flex items-center justify-center space-x-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bookmark"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                            <h1 className="text-xl">Why Me</h1>
                        </div>
                        <p className="text-sm">Sharing things about Next.js</p>
                    </div>
                )}
            </div>
    )
}

export default Output