'use client';

import RcGantt, { Gantt } from 'rc-gantt';
import React, { useRef } from 'react';
import { cn } from './utils';

interface GanttProps {
    title: string;
    data: any;
    dependencies?: Gantt.Dependence[];
    className?: string;
    unit?: Gantt.Sight
}

export const WDYGantt = ({ title, data, dependencies, className, unit }: GanttProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollAmount = 100; // 滚动量，单位为像素

    const simulateSvgScroll = (deltaX: number) => {
        if (containerRef.current) {
            // 根据类名查找 svg 元素
            const svgEl = containerRef.current.querySelector('svg.gantt-chart-svg-renderer');
            if (svgEl) {
                // 使用 svg 的中心位置作为事件的 client 坐标
                const rect = svgEl.getBoundingClientRect();
                const clientX = rect.left + rect.width / 2;
                const clientY = rect.top + rect.height / 2;
                
                const wheelEvent = new WheelEvent('wheel', {
                    deltaX,
                    deltaY: 0,
                    deltaMode: WheelEvent.DOM_DELTA_PIXEL,
                    clientX,
                    clientY,
                    bubbles: true,
                    cancelable: true,
                });
                svgEl.dispatchEvent(wheelEvent);
            } else {
                console.warn('SVG 元素未找到');
            }
        }
    };

    return (
        <div ref={containerRef} className={cn("flex flex-col gap-4 w-full h-[calc(100svh-190px)] z-10", className)}>
            <RcGantt
                data={data}
                columns={[
                    {
                        name: 'name',
                        label: title,
                        width: 100,
                    },
                ]}
                dependencies={dependencies}
                tableIndent={16}
                onUpdate={async () => true}
                getBarColor={() => ({
                    backgroundColor: 'red',
                    borderColor: 'yellow',
                })}
                hideTable={false}
                alwaysShowTaskBar={false}
                unit={unit}
            />
            <div className='m-auto max-w-[624px] w-full flex justify-between bg-gray-800/5 dark:bg-gray-100/5 rounded-sm'>
                <button
                    onClick={() => simulateSvgScroll(-scrollAmount)}
                    className="border-r border-gray-300 dark:border-gray-600 px-3 py-1"
                >
                    &lt;
                </button>
                <button
                    onClick={() => simulateSvgScroll(scrollAmount)}
                    className="border-l border-gray-300 dark:border-gray-600 px-3 py-1"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};