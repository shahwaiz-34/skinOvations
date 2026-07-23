
import Laser_hair_removal from "../../public/treatment/leaser-hair-removal.jpg"
import Botox from "../../public/treatment/botox-skin.jpg"
import Exosomes_skin from "../../public/treatment/exosome-skin.jpg"
import Exosomes_hair from "../../public/treatment/exosomes-hair.jpg"
import Filler_face from "../../public/treatment/filler-face-skin.jpg"
import PRP_with_micronedling from "../../public/treatment/PRP-microneedling-skin.jpg"
import HIFU from "../../public/treatment/HIFU-skin.jpg"
import Co2 from "../../public/treatment/c02-laser-skin.jpg"
import PICO from "../../public/treatment/pico-laser.jpg"
import Chest_hair from "../../public/treatment/chest-hair-removal.jpg"
import Ear_hair from "../../public/treatment/ear-hair-removal.jpg"
import Facial_hair from "../../public/treatment/face-hair-removal.jpg"
import Leg_hair from "../../public/treatment/legs-hair-removal.jpg"
import Lips_hair from "../../public/treatment/libs-hair-removal.jpg"
import Underarm_hair from "../../public/treatment/under-arms-removal.jpg"
import FUE_hair from "../../public/treatment/fue-hair-removal.jpg"
import Acne_scars from "../../public/treatment/acne-scar-skin.png"
import Diodi_skin from "../../public/treatment/diodi-skin.jpg"
import Female_hair_transplant from "../../public/treatment/female-hair-transplant.jpg"
import Hair_line_Hair_Removal from "../../public/treatment/hair-line-hair-removal.jpg"
import FUE_dahi from "../../public/treatment/fue-dhi-hair-removal.jpg"
import Male_body_Hair_Removal from "../../public/treatment/male-body-hair-removal.jpg"
import Man_facial_Hair_Removal from "../../public/treatment/man-facial-hair-removal.jpg"
import Skin_whiting_drip from "../../public/treatment/skin-whiting-drip.jpg"
import Arm_Hair_removal from "../../public/treatment/arm-hair.jpg"





















// Treatments Data

const Treatment = {
  hair: [
    {
      title: "Laser hair removal",
      desc: "Advanced laser technology targeting hair follicles for smooth, permanent hair reduction across selected body areas.",
      price: "From Rs. 8,000",
      image: Laser_hair_removal
    },
    {
      title: "DIOD laser hair removal",
      desc: "Gold-standard diode wavelength laser optimized for virtually painless hair removal on all skin types.",
      price: "From Rs. 10,000",
      image: Diodi_skin
    },
    {
      title: "Exosomes for hair",
      desc: "Cutting-edge biotechnology using cellular vesicles loaded with growth factors to reverse thinning and power hair regrowth.",
      price: "From Rs. 45,000",
      image: Exosomes_hair
    },
    {
      title: "PRP with microneedling",
      desc: "Platelet-Rich Plasma therapy combined with clinical microneedling to naturally stimulate dormant follicles and increase density.",
      price: "From Rs. 15,000",
      image: PRP_with_micronedling
    },
    {
      title: "FUE hair transplant",
      desc: "Follicular Unit Extraction relocating individual healthy grafts for a completely natural, lifetime hair restoration.",
      price: "From Rs. 90,000",
      image: FUE_hair
    },
    {
      title: "Fue dhi hair transplant",
      desc: "Direct Hair Implantation using precise specialized pens for higher graft density, perfect angle control, and faster healing.",
      price: "From Rs. 140,000",
      image: FUE_dahi
    },
    {
      title: "Female hair transplant",
      desc: "Advanced non-shaving or hidden-shave hair transplantation techniques tailored precisely for female pattern thinning.",
      price: "From Rs. 110,000",
      image: Female_hair_transplant
    },
    {
      title: "Facial hair removal",
      desc: "Gentle medical-grade laser targeting unwanted facial hair, peach fuzz, or sideburns for an even skin texture.",
      price: "From Rs. 5,000",
      image: Facial_hair
    },
    {
      title: "Man facial hair removal",
      desc: "Laser contouring and beard shaping for men to eliminate razor bumps, thick neck hair, and unstyled cheek growth.",
      price: "From Rs. 6,000",
      image: Man_facial_Hair_Removal
    },
    {
      title: "Underarm hair removal",
      desc: "Quick, highly effective laser sessions to completely eliminate coarse underarm hair and shadow skin pigmentation.",
      price: "From Rs. 4,500",
      image: Underarm_hair
    },
    {
      title: "Arm hair removal",
      desc: "Full or half-arm laser hair removal creating uniform, silky smooth skin without the hassle of regular waxing.",
      price: "From Rs. 12,000",
      image: Arm_Hair_removal
    },
    {
      title: "Legs hair removal",
      desc: "Long-lasting laser treatment covering full lower extremities, removing thick hairs and preventing painful ingrowns.",
      price: "From Rs. 18,000",
      image: Leg_hair
    },
    {
      title: "Chest hair removal",
      desc: "Tailored laser thinning or full clearance of chest and abdominal hair for a cleaner, well-groomed look.",
      price: "From Rs. 14,000",
      image: Chest_hair
    },
    {
      title: "Male body hair removal",
      desc: "Comprehensive multi-zone laser packages for men covering large areas like full back, shoulders, or torso.",
      price: "From Rs. 28,000",
      image: Male_body_Hair_Removal 
    },
    {
      title: "Hair line hair removal",
      desc: "Precision laser hairline adjustment to fix forehead symmetry, clean up irregular shapes, or adjust a low hairline.",
      price: "From Rs. 4,000",
      image: Hair_line_Hair_Removal
    },
    {
      title: "Lips hair removal",
      desc: "Fast, hyper-targeted laser removal for stubborn upper and lower lip hairs with minimal discomfort.",
      price: "From Rs. 2,500",
      image: Lips_hair
    },
    {
      title: "Ear hair removal",
      desc: "Safe, intricate laser targeting to cleanly remove unsightly hair growth on the outer ear lobes and edges.",
      price: "From Rs. 3,000",
      image: Ear_hair
    }
  ],
  skin: [
    {
      title: "Botox",
      desc: "Premium FDA-approved injections designed to relax dynamic facial muscles, smoothing out fine lines and wrinkles.",
      price: "From Rs. 30,000",
      image: Botox
    },
    {
      title: "Filler for face",
      desc: "Artistic dermal fillers engineered to instantly restore lost facial volume, sculpt jawlines, and plump lips.",
      price: "From Rs. 45,000",
      image: Filler_face
    },
    {
      title: "Exosomes for skin",
      desc: "Advanced regenerative cellular therapy delivered via microneedling to rapidly speed up cellular repair, erase fine lines, and boost glow.",
      price: "From Rs. 40,000",
      image: Exosomes_skin
    },
    {
      title: "HIFU Skin Tightening",
      desc: "High-Intensity Focused Ultrasound acting as a non-surgical facelift to lift sagging skin and tighten the jawline layers.",
      price: "From Rs. 35,000",
      image: HIFU
    },
    {
      title: "co2 Laser Resurfacing for acne scars",
      desc: "Fractional CO2 laser therapy that safely vaporizes damaged skin layers to aggressively flatten deep ice-pick and boxcar acne scars.",
      price: "From Rs. 15,000",
      image: Co2
    },
    {
      title: "PICO Laser",
      desc: "Ultra-fast, picosecond light pulses designed to shatter deep stubborn pigments, melasma, dark spots, and old tattoo inks.",
      price: "From Rs. 20,000",
      image: PICO
    },
    {
      title: "Acne scars treatment",
      desc: "A multi-modality approach combining subcision, cross-peels, and collagen induction tailored to eliminate uneven scar depressions.",
      price: "From Rs. 12,000",
      image: Acne_scars
    },
    {
      title: "Skin Lightening drips",
      desc: "Antioxidant-rich IV infusions containing high-dose Glutathione and Vitamin C to safely brighten skin tone and detoxify the body.",
      price: "From Rs. 15,000",
      image: Skin_whiting_drip
    }
  ]
};

export default Treatment;