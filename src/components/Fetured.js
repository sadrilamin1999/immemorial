import SectionTitle from "../utls/SectionTitle";
const Fetured = () => {
  return (
    <section className="wrapper">
      <SectionTitle titleText="Fetured" />
      <div className="fetures grid grid-cols-[30%_auto] gap-[10rem] items-center gap-[10rem]">
        <div className="feture-left flex flex-col gap-[1rem]">
          <span className=" tracking-[5px] font-[500]">90'S TELEPHONE</span>
          <img
            className="w-full"
            src="https://images.pexels.com/photos/2587464/pexels-photo-2587464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="90'S TELEPHONE"
          />
        </div>
        <div className="feture-right flex flex-col gap-[1rem]">
          <span className=" tracking-[5px] font-[500]">
            90'S CASSETTE PLAYER
          </span>
          <img
            className="w-full"
            src="https://images.pexels.com/photos/6076410/pexels-photo-6076410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="90'S CASSETTE PLAYER"
          />
        </div>
      </div>
    </section>
  );
};

export default Fetured;
