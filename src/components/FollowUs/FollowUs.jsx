const FollowUs = () => {
  return (
    <div className="my-20 max-w-6xl mx-auto">
      {/* header title  */}
      <div className="text-center">
        <h1 className="text-raleway">Follow us now</h1>
        <h2 className="text-rancho text-6xl text-[#4c322c]">
          Follow on Instagram
        </h2>
      </div>
      {/* images section  */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <img src="../../../public/images/cups/Rectangle-9.png" alt="" />
        <img src="../../../public/images/cups/Rectangle-10.png" alt="" />
        <img src="../../../public/images/cups/Rectangle-11.png" alt="" />
        <img src="../../../public/images/cups/Rectangle-12.png" alt="" />
        <img src="../../../public/images/cups/Rectangle-13.png" alt="" />
        <img src="../../../public/images/cups/Rectangle-14.png" alt="" />
        <img src="../../../public/images/cups/Rectangle-15.png" alt="" />
        <img src="../../../public/images/cups/Rectangle-16.png" alt="" />
      </div>
    </div>
  );
};

export default FollowUs;
