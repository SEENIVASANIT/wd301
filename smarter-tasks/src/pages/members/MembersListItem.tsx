import {
  useMembersState,
  useMembersDispatch,
} from "../../context/members/context";
import { deleteMember } from "../../context/members/actions";
import { TrashIcon } from "@heroicons/react/24/outline";
export default function MembersListItem() {
  const dispatchMembers = useMembersDispatch();
  let state: any = useMembersState();
  const { members, isLoading, isError, errorMessage } = state;
  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>{errorMessage}</span>;
  }
  const handleDelete = async (id: number) => {
    const response = await deleteMember(dispatchMembers, { id });
    if (response.ok) {
      window.location.reload();
    } else {
      console.log(response.error);
    }
  };
  return (
    <>
      {members.map((member: any) => (
        <div
          key={member.id}
          className="w-75 member flex flex-col flex-wrap p-6 bg-white border border-gray-500 shadow  dark:text-black-500 rounded-sm"
        >
          <div className="flex items-center justify-end">
            <button onClick={() => handleDelete(member.id)}>
              <TrashIcon
                className="w-5 h-5 hover:text-red-800 duration-100"
                aria-hidden="true"
              ></TrashIcon>
            </button>
          </div>
          <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-500 dark:text-white ">
            Name:{member.name}
          </h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-500 dark:text-white ">
            Email Id:{member.email}
          </h5>
        </div>
      ))}
    </>
  );
}
