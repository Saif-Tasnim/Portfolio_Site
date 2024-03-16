import React from "react";
import facebook from "../../../assets/contact/facebook.png";
import discord from "../../../assets/contact/discord.png";
import linkedin from "../../../assets/contact/linkedin (1).png";
import instagram from "../../../assets/contact/instagram.png";
import twitter from "../../../assets/contact/twitter.png";
import github from "../../../assets/contact/github (1).png";
import leeCode from "../../../assets/contact/LeetCode_logo_black.webp";
import vJudge from "../../../assets/contact/11b24ab2156955d8f3fa.ico";
import beeCrowd from "../../../assets/contact/beecrowd.ico";
import hackerRank from "../../../assets/contact/th.jpeg";

const Contact = () => {
  return (
    <section name="contact" className="pt-44">
      <h1 className="text-center text-xl font-bold underline">
        {" "}
        Contact With Saif
      </h1>

      <div className="my-20 flex flex-col gap-12 md:flex-row md:justify-around">
        <div>
          <h1 className="text-lg font-bold mb-4"> Mailing Address </h1>
          <p className="py-1 flex gap-3">
            <span className="hidden md:block">🏠</span>
            <span className="underline">Home Address :</span>
            <span> Khilkhet, Dhaka, Bangladesh </span>
          </p>
          <p className="py-1 flex gap-3">
            <span className="hidden md:block">📧</span>
            <span className="underline">Email Address :</span>{" "}
            <span> saiftasnim2002@gmail.com</span>
          </p>
          <p className="py-1 flex gap-3">
            <span className="hidden md:block">📞</span>
            <span className="underline">Phone : </span>{" "}
            <span>+880 1877-669501</span>{" "}
            <span className="ml-4 hidden md:block"> Whats APP & Telegram available ✅</span>
          </p>
        </div>

        <div>
          <h1 className="text-lg font-bold mb-4">Other Communication Link </h1>

          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/profile.php?id=100008643126562"
              target="_blank"
            >
              <img src={facebook} alt="facebook" className="w-9" />
            </a>
            <a href="https://www.linkedin.com/in/saif-tasnim/" target="_blank">
              <img src={linkedin} alt="linkedin" className="w-9" />
            </a>
            <a href="https://discordapp.com/users/saiftasnim" target="_blank">
              <img src={discord} alt="discord" className="w-9" />
            </a>
            <a
              href="https://x.com/Saif_Tasnim_15?t=k29cMr7e4MgtFYnQy0j0CQ&s=09"
              target="_blank"
            >
              {" "}
              <img src={twitter} alt="twitter" className="w-9" />{" "}
            </a>
            <a
              href="https://www.instagram.com/saif_tasnim?igsh=MXZ1cTVtMm94azlzMA=="
              target="_blank"
            >
              {" "}
              <img src={instagram} alt="instagram" className="w-9" />{" "}
            </a>
          </div>
        </div>

        <div>
          <h1 className="text-lg font-bold mb-4">Links Must Visit </h1>
          <div className="flex gap-5">
            <a href="https://github.com/Saif-Tasnim" target="_blank">
              <img src={github} alt="github" className="w-9" />
            </a>
            <a href="https://leetcode.com/Saif_Tasnim/" target="_blank">
              <img src={leeCode} alt="leetCode" className="w-9" />
            </a>
            <a href="https://www.hackerrank.com/profile/saiftasnim2002" target="_blank">
              <img src={hackerRank} alt="Hacker Rank" className="w-9" />
            </a>
            <a href="https://judge.beecrowd.com/en/profile/437672" target="_blank">
              <img src={beeCrowd} alt="beeCrowd" className="w-9" />
            </a>
            <a href="https://vjudge.net/user/saif_tasnim" target="_blank">
              <img src={vJudge} alt="VJudge" className="w-9" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
