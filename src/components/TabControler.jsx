import {  Tabs } from 'flowbite-react';
import { Button } from './Button';



export const TabControler = ({handleClickleOpenModel}) => {
    return (
        <Tabs aria-label="Tabs with underline" style="underline">
            <Tabs.Item active title="All">
                    <Button text='Select Course' handleClick={handleClickleOpenModel} />
            </Tabs.Item>
            <Tabs.Item title="In Progress">
                
            </Tabs.Item>
            <Tabs.Item title="Completed">
                
            </Tabs.Item>
        </Tabs>
    )
}
