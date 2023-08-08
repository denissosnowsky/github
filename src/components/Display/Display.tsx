import { GITHUB_RES } from "../../types";

type DisplayProps = {
  userData: GITHUB_RES | null;
};

const Display = ({ userData }: DisplayProps) => {
  return (
    <>
      {userData ? (
        <div className="grid grid-cols-2 grid-rows-4 w-full h-full text-2xl">
          <div className="h-full w-full flex justify-center items-center">
            Avatar:{" "}
          </div>
          <div className="h-full w-full flex justify-center items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden">
              <img
                src={userData.avatar_url}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="h-full w-full flex justify-center items-center">
            Username:{" "}
          </div>
          <div className="h-full w-full flex justify-center items-center">
            {userData.name}
          </div>
          <div className="h-full w-full flex justify-center items-center">
            Bio:{" "}
          </div>
          <div className="h-full w-full flex justify-center items-center">
            {userData.bio}
          </div>
          <div className="h-full w-full flex justify-center items-center">
            Link:{" "}
          </div>
          <div className="h-full w-full flex justify-center items-center">
            <a href={userData.html_url} target="_blank">
              {userData.html_url}
            </a>
          </div>
        </div>
      ) : (
        <div>No user</div>
      )}
    </>
  );
};

export default Display;
