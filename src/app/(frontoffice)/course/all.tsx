import React, { useEffect } from "react";
import Course from "../_components/course";
import { useAllCourse } from "@/app/utils/hooks/course";
import { useUserStore } from "@/app/utils/stores/cookie";

const All = () => {
  const { client, loadClient } = useUserStore();
  useEffect(() => {
    if (!client) {
      loadClient();
    }
  }, [client, loadClient]);

  const { allCourse } = useAllCourse(client?.access ?? "");

  return (
    <div className="grid grid-cols-3 custom-950:grid-cols-2 custom-768:grid-cols-1 gap-4 mt-6">
      {allCourse?.map((value: any, index: any) => {
        return (
          <div key={index}>
            <Course value={value} />
          </div>
        );
      })}
    </div>
  );
};

export default All;
