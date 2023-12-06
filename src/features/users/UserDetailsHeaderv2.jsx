//styles
import "./UserDetails.css";

//components
import Tag from "../../ui/Tag";
import Spinner from "../../ui/Spinner";
//hooks
import { useGetUser } from "./useGetUser";

const UserDetailsHeaderv2 = () => {
  const { user, loadingUser } = useGetUser();

  if (loadingUser) return <Spinner />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 nasWrapper">
      <div className="max-w-4xl mx-auto ">
        <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3 flex ">
          <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
              Name
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-gray-700">
              {user?.firstName}
            </dd>
          </div>
          <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
              Lastname
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-gray-700">
              {user?.lastName}
            </dd>
          </div>
          <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
              Email
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-gray-700">
              {user?.email}
            </dd>
          </div>

          <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
              Registrated
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-gray-700">
              {user?.registrationDate.substring(0, 10)}
            </dd>
          </div>
          <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
              Membership
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-gray-700">
              {user.active === null ? (
                <Tag size="big" type="yellow">
                  not a member
                </Tag>
              ) : user.active ? (
                <Tag size="big" type="green">
                  active
                </Tag>
              ) : (
                <Tag size="big" type="red">
                  not active
                </Tag>
              )}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default UserDetailsHeaderv2;
