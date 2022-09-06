import React from "react";
import WidgetLarge from "../../../components/adminComponents/components/widgetLarge/WidgetLarge";
import WidgetSmall from "../../../components/adminComponents/components/widgetSmall/WidgetSmall";
import Charts from "../../../components/adminComponents/components/charts/Charts";
import FeaturedInfo from "../../../components/adminComponents/components/featureInfo/FeaturedInfo";
import Topbar from "../../../components/adminComponents/components/topbar/Topbar";
import Sidebar from "../../../components/adminComponents/components/sidebar/Sidebar";
import { userData } from "../../../dummyData";
import "./adminHome.css";

function AdminHome() {
  return (

    <div>
      
      <Topbar className = "" />
      
      <div className="flex w-full">
        <div className="w-[20%]">
        <Sidebar />
        </div>

        <div className="w-[70%] mt-2 ">
              <FeaturedInfo />
              <Charts
                data={userData}
                title="User Analytics"
                grid
                dataKey="Active User"
                />
              <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
              </div>
        </div>
      
      
      </div>
    </div>
    
    
  );
}

export default AdminHome;
