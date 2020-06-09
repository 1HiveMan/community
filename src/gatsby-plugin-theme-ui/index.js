import React from "react";
import { Box, useThemeUI } from "theme-ui";
import maker from "@makerdao/dai-ui-theme-maker";
import { icons as themeIcons } from "@makerdao/dai-ui-icons";

export default {
  ...maker, //<- Your default theme.
  icons: {
    ...themeIcons,
    rocketchat: {
      path: (
        <g>
          <path d="M897.652553,349.549588 L897.670672,349.577915 C897.667651,349.573194 897.664631,349.568473 897.66161,349.563753 C897.658591,349.559031 897.655572,349.55431 897.652553,349.549588 Z M308.396914,38.0579853 C339.950051,55.5852084 369.77579,77.7610018 395.247258,102.408989 C436.3062,94.971277 478.642804,91.2207259 521.592685,91.2207259 C650.166356,91.2207259 772.06552,124.954556 864.813551,186.188905 C912.843417,217.915397 951.019953,255.558252 978.269926,298.082105 C1008.61695,345.465828 1024,396.420498 1024,451.020069 C1024,504.151115 1008.61695,555.126915 978.269926,602.500072 C951.019953,645.045056 912.843417,682.677345 864.813551,714.403838 C772.06552,775.638187 650.176577,809.350887 521.592685,809.350887 C478.642804,809.350887 436.316421,805.600336 395.247258,798.173188 C369.765569,822.810611 339.950051,844.996969 308.396914,862.524192 C139.806873,946.969698 0,864.5104 0,864.5104 C0,864.5104 129.984209,754.138549 108.846571,657.384897 C50.6874021,597.766982 19.1751495,525.862051 19.1751495,449.572673 C19.1751495,374.720126 50.6976233,302.815195 108.846571,243.186716 C129.980709,146.459648 0.0430429402,36.1083296 1.06907039e-05,36.071787 C0.0415865255,36.0472508 139.831947,-46.3855248 308.396914,38.0579853 Z M207.644933,618.178321 C223.940731,670.240929 214.393935,728.919862 179.004543,794.21512 C177.311439,797.338984 175.734295,800.498544 174.02153,803.617499 C204.383377,801.072684 235.071647,792.732517 266.148978,777.445905 C289.594908,764.226126 312.088128,747.449933 331.278991,728.911725 L366.597865,694.794 C414.907252,707.829484 467.909245,715.027017 523.505618,715.027017 C749.086014,715.027017 931.955056,596.533805 931.955056,450.365019 C931.955056,304.196234 749.086014,185.703021 523.505618,185.703021 C297.925222,185.703021 115.05618,304.196234 115.05618,450.365019 C115.05618,514.064252 149.785743,572.507481 207.644933,618.178321 Z" id="Combined-Shape" fill="currentColor"></path>
          <path d="M328.100131,509.450766 C294.861648,509.450766 267.916533,482.59514 267.916533,449.467047 C267.916533,416.338954 294.861648,389.483328 328.100131,389.483328 C361.338614,389.483328 388.283729,416.338954 388.283729,449.467047 C388.283729,482.59514 361.338614,509.450766 328.100131,509.450766 Z M521.861958,509.450766 C488.623475,509.450766 461.67836,482.59514 461.67836,449.467047 C461.67836,416.338954 488.623475,389.483328 521.861958,389.483328 C555.100442,389.483328 582.045556,416.338954 582.045556,449.467047 C582.045556,482.59514 555.100442,509.450766 521.861958,509.450766 Z M715.623786,509.450766 C682.385302,509.450766 655.440188,482.59514 655.440188,449.467047 C655.440188,416.338954 682.385302,389.483328 715.623786,389.483328 C748.862269,389.483328 775.807384,416.338954 775.807384,449.467047 C775.807384,482.59514 748.862269,509.450766 715.623786,509.450766 Z" id="circles" fill="currentColor"></path>
        </g>
      ),
      viewBox: "0 0 1024 1024",
      fill: "currentColor"
    },
  }, //<- Icon package
  colors: {
    ...maker.colors, //<- Deconstruct maker.colors so default colors aren't lost.
  },
  styles: {
    ...maker.styles,
    a: {
      color: "#36aa9a",
      textDecoration: 'none'
    }
  },
  buttons: {
    primary: {
      borderRadius: "small",
      cursor: "pointer",
      outline: "none",
      fontFamily: "body",
      fontSize: 2,
      p: 3,
      py: 2,
      color: "onPrimary",
      fontWeight: "bold", 
      letterSpacing: "0.03em", 
      bg: "#36aa9a",
      "&:hover": {
        bg: "#48bbaf",
      },
      "&:active": {
        bg: "#309989",
      },
      "&:disabled": {
        bg: "#a3ddd7",
        pointerEvents: "none",
        cursor: "not-allowed",
      },
    },

    primaryOutline: {
      variant: "buttons.primary",
      bg: "surface",
      color: "#309989",
      border: "1px solid",
      borderColor: "#309989",
      "&:hover": {
        bg: "successAlt",
      },
      "&:active": {
        bg: "#d9f7f2",
      },
      "&:disabled": {
        bg: "surface",
        pointerEvents: "none",
        cursor: "not-allowed",
        color: "#aaccc9",
        borderColor: "#aaccc9",
        opacity: 0.5,
      },
    },
    
    secondary: {
      variant: "buttons.primary",
      color: "textAlt",
      bg: "#291a41",
      "&:hover": {
        bg: "#534868",
      },
      "&:active": {
        bg: "#150332",
      },
      "&:disabled": {
        bg: "#a9a3b3",
        pointerEvents: "none",
        cursor: "not-allowed",
      },
    },

    secondaryOutline: {
      variant: "buttons.primary",
      bg: "surface",
      color: "#291a41",
      border: "1px solid",
      borderColor: "#291a41",
      "&:hover": {
        bg: "#eae9ed",
      },
      "&:active": {
        bg: "#c9c5ce",
      },
      "&:disabled": {
        bg: "surface",
        pointerEvents: "none",
        cursor: "not-allowed",
        borderColor: "#a9a3b3",
        bg: "#a9a3b3",
        opacity: 0.5,
      },
    },
  },
}
