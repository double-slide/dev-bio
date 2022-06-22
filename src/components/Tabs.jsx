import { Card, Center, Grid, Text, Title, Space, Tabs, MessageCircle, Photo, Settings } from '@mantine/core';

function TabsAtTop() {
  return (
    <>
      <Tabs>
      {/* <Tabs.Tab label="Gallery" icon={<Photo size={14} />}>Gallery tab content</Tabs.Tab> */}
      {/* <Tabs.Tab label="Messages" icon={<MessageCircle size={14} />}>Messages tab content</Tabs.Tab> */}
      {/* <Tabs.Tab label="Settings" icon={<Settings size={14} />}>Settings tab content</Tabs.Tab> */}
      <Tabs.Tab label="Gallery" >Gallery tab content</Tabs.Tab>
      <Tabs.Tab label="Messages" >Messages tab content</Tabs.Tab>
      {/* <Tabs.Tab label="Settings" icon={<Settings size={14} />}>Settings tab content</Tabs.Tab> */}
    </Tabs>

    </>
  );
}

export default TabsAtTop;