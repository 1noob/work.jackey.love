'use client';

import RcGantt from 'rc-gantt';
import React, { useRef, useEffect } from 'react';
import { cn } from './utils';

interface GanttProps {
    title: string;
    data: any;
    className?: string;
}

export const WDYGantt = ({ title, data, className }: GanttProps) => {
    // 用于查找容器（建议注意 RcGantt 内部的渲染结构，如果需要可改为查询 svg 元素）
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollAmount = 100; // 每次滚动的像素数

    const simulateWheelEvent = (deltaX: number) => {
        if (containerRef.current) {
            // 如果 RcGantt 内部监听的是 svg 上的滚动，可先找到 svg 元素：
            const svgEl = containerRef.current.querySelector('svg');
            const targetEl = svgEl || containerRef.current;
            const wheelEvent = new WheelEvent('wheel', {
                deltaX,
                deltaY: 0,
                deltaMode: WheelEvent.DOM_DELTA_PIXEL,
                bubbles: true,
            });
            targetEl.dispatchEvent(wheelEvent);
        }
    };

    return (
        <div ref={containerRef} className={cn("flex flex-col gap-4 w-full h-[calc(100vh-190px)] z-10", className)}>
            <RcGantt
                data={data}
                columns={[
                    {
                        name: 'name',
                        label: title,
                        width: 100,
                    },
                ]}
                tableIndent={0}
                onUpdate={async () => true}
                getBarColor={() => ({
                    backgroundColor: 'red',
                    borderColor: 'yellow',
                })}
                hideTable={false}
                alwaysShowTaskBar={true}
                unit={'day'}
            />
            <div className='m-auto max-w-2xl w-full flex justify-between gap-4 px-6'>
                <button
                    onClick={() => simulateWheelEvent(-scrollAmount)}
                    className=" bg-gray-200 rounded-sm px-3 py-1"
                >
                    &lt;
                </button>
                <button
                    onClick={() => simulateWheelEvent(scrollAmount)}
                    className=" bg-gray-200 rounded-sm px-3 py-1"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};