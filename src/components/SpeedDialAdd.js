import React, { useState } from "react";
import { SpeedDial } from "@rneui/themed";
import { View } from "react-native";

export default function SpeedDialAdd() {
    const [open,setOpen] = useState(false);

    return(
        <SpeedDial 
            isOpen={open} 
            icon={{name:'add',color:"white"}} 
            openIcon={{name:'close',color:"white"}} 
            onOpen={()=>setOpen(!open)} 
            onClose={()=>setOpen(!open)}
        >
            <SpeedDial.Action 
             icon={{name:'add',color:"white"}}
             title="Add Post"
             onPress={() => console.log('Add Something')}
            />
            <SpeedDial.Action 
             icon={{name:'add',color:"white"}}
             title="Add Vehicle"
             onPress={() => console.log('Add Something')}
            />
            <SpeedDial.Action 
             icon={{name:'add',color:"white"}}
             title="Add Item"
             onPress={() => console.log('Add Something')}
            />
            <SpeedDial.Action 
             icon={{name:'add',color:"white"}}
             title="Add Idea"
             onPress={() => console.log('Add Something')}
            />

        </SpeedDial>
    );



}