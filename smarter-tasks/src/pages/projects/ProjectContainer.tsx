import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useProjectsDispatch } from "../../context/projects/context";
import { fetchProjects } from "../../context/projects/actions";
import { useMemberDispatch } from "../../context/members/context";
import { fetchMembers } from "../../context/members/actions";

const ProjectContainer = () => {
  const projectDispatch = useProjectsDispatch();
  const memberDispatch = useMemberDispatch();
  useEffect(() => {
    fetchProjects(projectDispatch);
    fetchMembers(memberDispatch);
  }, [projectDispatch, memberDispatch]);
  return <Outlet />;
};
export default ProjectContainer;