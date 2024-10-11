import React, { useEffect } from "react";
import Course from "../_components/course";
import { useAllCourse } from "@/app/utils/hooks/course";
import { useUserStore } from "@/app/utils/stores/cookie";

const All = () => {
  const { user, loadUser } = useUserStore();
  useEffect(() => {
    if (!user) {
      loadUser();
    }
  }, [user, loadUser]);

  const { allCourse } = useAllCourse(user?.access ?? "");

  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
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
