import { BookX, Hourglass, Package } from "lucide-react";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5">
        <div className="flex items-center justify-between gap-5 rounded-xl border p-5 shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
          <div>
            <p className="mb-0.5 text-[15px] text-[#696c70]">Awaiting Pickup</p>
            <h4 className="text-2xl font-semibold">4</h4>
          </div>
          <Hourglass className="size-7" />
        </div>
        <div className="flex items-center justify-between gap-5 rounded-xl border p-5 shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
          <div>
            <p className="mb-0.5 text-[15px] text-[#696c70]">
              Cancelled Orders
            </p>
            <h4 className="text-2xl font-semibold">12</h4>
          </div>
          <BookX className="size-7" />
        </div>
        <div className="flex items-center justify-between gap-5 rounded-xl border p-5 shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
          <div>
            <p className="mb-0.5 text-[15px] text-[#696c70]">Total Orders</p>
            <h4 className="text-2xl font-semibold">200</h4>
          </div>
          <Package className="size-7" />
        </div>
      </div>
      {/* <div className="mt-7 rounded-xl border p-5 lg:p-6">
        <h6 className="mb-5 text-lg font-semibold">Recent Orders</h6>
      </div> */}
    </div>
  );
};

export default Dashboard;
