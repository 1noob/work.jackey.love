'use client';

import RcGantt, { Gantt, GanttRef } from 'rc-gantt';
import React, { useRef, useState } from 'react';
import { cn } from './utils';

interface GanttProps {
    title: string;
    data: any;
    className?: string;
}

export const WDYGantt = ({ title, data, className }: GanttProps) => {
    const ref = useRef<GanttRef>(null!);

    return (
        <div className={cn("flex w-full h-96", className)}>
            <RcGantt
                data={data}
                innerRef={ref}
                columns={[
                    {
                        name: 'name',
                        label: title,
                        width: 100,
                    },
                ]}
                tableIndent={0}
                onUpdate={async () => false}
                getBarColor={() => ({
                    backgroundColor: 'red',
                    borderColor: 'yellow',
                })}
                hideTable={false}
                alwaysShowTaskBar={true}
                unit={'day'}
            />
        </div>
    );
};