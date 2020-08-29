import React, { FC, Ref } from "react";
import Fade from "@material-ui/core/Fade";

interface MapSVGProps {
  handleBuildingSelect: Function;
  focus: Ref<SVGCircleElement>;
  show: boolean;
}

const MapSVG: FC<MapSVGProps> = ({ handleBuildingSelect, focus, show }) => {
  const buildColor = "#B9A99C";
  const buildStrokeWidth = "0.75";
  const buildStrokeColor = "#B9A99C";
  const textColor = "black";

  return (
    <Fade in={show} timeout={2000}>
      <svg
        width="2000"
        height="2000"
        viewBox="0 0 2000 2000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M614.024 1267.66L630.771 1285.63L662.794 1293.03L763.218 1291.55L773.82 1289.84L813.922 1288.83L852.071 1289.22L1043.07 1292.01L1377.53 1292.33L1376.83 1025.13L1374.4 792.253L1374.01 549.042L1232.38 551.522L1232.16 441.547L1094.92 444.286L1096.2 537.556L1096.11 558.85L1082.12 559.146L1075.71 633.393L1073.9 643.248L1066.29 659.86L1048.33 682.327L1029.01 694.148L605.519 703.682L609.274 912.357L609.295 916.05L610.581 1126.57L617.634 1127.35L620.048 1138.14L619.224 1165.15L610.079 1165.24L611.809 1202.3L614.024 1267.66Z"
          fill="#F2F3F7"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1201.27 755.8L1341.85 862.026L1370.9 862.452L1370.14 703.617L1231.67 704.828L1201.27 755.8Z"
          fill="#C8FACC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1089.47 684.824L1097.65 709L1103.38 705.06L1110.06 702.635L1123.25 702.384L1131.23 704.459L1138.92 707.339L1148.37 709.767L1156.65 713.871L1163.43 716.491L1179.19 718.545L1188.07 716.431L1204.33 715.995L1212.17 714.85L1252.67 659.815L1217.61 658.208L1204.79 646.155L1197.77 644.203L1192.77 643.84L1183.52 644.735L1169.36 646.461L1153.6 648.193L1140.61 645.679L1134.45 644.799L1127.67 645.221L1087.57 655.541L1087.47 662.618L1087.66 670.406L1089.47 684.824Z"
          fill="#C8FACC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M860.647 1276.35L913.572 1276.99L939.649 1275.21L977.903 1277.07L978.919 1269.32L979.934 1246.97L991.462 1247.15L996.037 1227.79L972.687 1223.6L965.85 1255.13L947.73 1255.34L948.72 1235.9L948.008 1230.56L951.359 1223.93L919.88 1220.28L915.677 1240.21L867.823 1241.59L862.082 1241.76L860.647 1276.35Z"
          fill="#C8FACC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M787.149 989.983L834.394 989.882L834.264 1007.59L841.505 1008.21L867.811 1013.46L868.471 1007.8L873.085 1009.21L873.316 999.456L883.102 984.986L867.713 962.925L838.662 963.549L838.001 965.463L825.767 965.707L819.36 963.561L786.785 962.94L787.149 989.983Z"
          fill="#C8FACC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M866.669 961.526L883.106 984.986L900.95 987.199L911.517 989.114L913.469 969.821L925.981 971.063L927.917 932.595L878.237 926.655L874.881 937.716L867.732 938.182L866.669 961.526Z"
          fill="#C8FACC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M938.887 1086.14L966.726 1090.13L967.238 1086.87L1022 1094.4L1024.41 1077.69L981.357 1072.33L983.471 1055.18L942.957 1049.63L940.481 1069.45L938.887 1086.14Z"
          fill="#C8FACC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M834.146 1082.68L935.403 1097.64L938.646 1074.32L893.38 1068.25L885.615 1067.08L864.012 1064.13L834.561 1076.65L834.146 1082.68Z"
          fill="#C8FACC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M993.66 916.685L999.539 922.489L1010.25 927.662L1021.25 930.703L1028.5 931.826L1033.92 932.31L1041.27 932.019L1048.89 930.634L1053.57 928.876L1058.67 925.63L1061.98 922.252L1064.44 918.184L1066.53 913.057L1067.03 907.441L1066.62 903.89L1065.25 900.408L1062.99 897.879L1059.06 896.015L1054.79 895.286L1049.7 895.077L1042.48 895.55L1032.4 897.494L1016.54 901.217L1004.07 905.427L997.025 909.548L994.967 911.608L993.581 913.588L993.66 916.685Z"
          fill="#C8FACC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M786.919 1035.66L804.34 1037.23L824.594 1044.17L841.505 1008.21L787.39 1007.9L786.919 1035.66Z"
          fill="#C8FACC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M792.949 1087.39L816.619 1084.3L815.015 1062.48L824.594 1044.17L804.34 1037.23L805.014 1061.48L791.922 1061.78L792.949 1087.39Z"
          fill="#C8FACC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M721.634 1117.66L735.172 1118.02L734.914 1095.79L721.657 1095.97L721.634 1117.66Z"
          fill="#C8FACC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M834.553 1076.65L864.005 1064.13L834.889 1060.3L834.553 1076.65Z"
          fill="#C8FACC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1157.02 1133.07L1164.78 1150.87L1182.81 1164.83L1214.02 1165.89L1229.27 1162.8L1239.64 1156.23L1252.79 1173.7L1273.92 1186.63L1295.27 1190.81L1320.34 1191.12L1345.72 1189.9L1366.63 1186.81L1365.05 1079.33L1367.94 890.203L1343.51 885.423L1311.01 864.782L1300.34 912.793L1280.39 911.32L1196.94 882.498L1185.47 882.607L1179.43 886.424L1174.49 891.646L1172.61 994.727L1159.48 1087.52L1155.75 1108.25L1157.02 1133.07Z"
          fill="#DFFCE2"
          stroke="#0E9B19"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1117 772.748L1127.01 793.495L1134.14 790.139L1129.79 780.822L1128.76 781.316L1123.2 769.747L1117 772.748Z"
          fill="#DFFCE2"
          stroke="#3CED4A"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1135.15 894.579L1153.34 894.544L1153.33 889.065L1144.03 888.988L1141.81 888.918L1141.74 886.947L1139.34 887.013L1135.09 887.123L1135.15 894.579Z"
          fill="#DFFCE2"
          stroke="#3CED4A"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1163.66 933.557L1168.31 933.61L1168.57 912.5L1163.92 912.438L1163.66 933.557Z"
          fill="#DFFCE2"
          stroke="#3CED4A"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1160.62 1059.96L1164.71 1060.49L1166.36 1045.13L1162.55 1044.69L1160.62 1059.96Z"
          fill="#DFFCE2"
          stroke="#0E9B19"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1288.64 1034.25L1292.72 1034.78L1294.38 1019.43L1290.56 1018.98L1288.64 1034.25Z"
          fill="#DFFCE2"
          stroke="#0E9B19"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M706.457 1235.07L710.942 1234.87L710.906 1239L713.664 1238.33L715.134 1234.71L713.727 1230.41L710.391 1229.5L705.992 1230.93L706.457 1235.07Z"
          fill="#DFFCE2"
          stroke="#0E9B19"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1155.82 1125.59L1160.7 1138.96L1168.05 1150.83L1181.34 1159.03L1196.34 1160.97L1211.97 1160.08L1229.05 1154.62L1239.42 1148.05L1248.13 1137.94L1258.1 1122.19L1262.51 1108.97L1262.24 1093.78L1258.49 1084.04L1252.67 1074.53L1243.53 1067.53L1231.27 1062.91L1217.72 1061.26L1203.97 1062.28L1192.81 1064.69L1180.24 1071.07L1169.95 1078.16L1161.33 1088.8L1154.82 1099.1L1154.22 1112.25L1155.82 1125.59Z"
          fill="#AAE0CB"
          stroke="#6ABA9B"
          stroke-width="0.5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1178.26 985.58L1224.63 984.714L1223.3 913.22L1176.93 914.084L1178.26 985.58Z"
          fill="#AAE0CB"
          stroke="#6ABA9B"
          stroke-width="0.5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1229.83 984.431L1276.26 983.823L1275.33 912.792L1228.9 913.402L1229.83 984.431Z"
          fill="#AAE0CB"
          stroke="#6ABA9B"
          stroke-width="0.5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1204.97 1039.61L1276.57 1038.42L1275.8 992.605L1204.21 993.801L1204.97 1039.61Z"
          fill="#AAE0CB"
          stroke="#6ABA9B"
          stroke-width="0.5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1122.12 747.951L1153.28 812.188L1191.77 793.786L1160.8 729.441L1122.12 747.951Z"
          fill="#AAE0CB"
          stroke="#6ABA9B"
          stroke-width="0.5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1116.54 943.98L1161.31 944.439L1161.81 896.422L1131.99 896.121L1117.04 895.963L1116.54 943.98Z"
          fill="#AAE0CB"
          stroke="#6ABA9B"
          stroke-width="0.5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1119.65 830.319L1141.93 829.946L1141.5 804.322L1119.22 804.691L1119.65 830.319Z"
          fill="#AAE0CB"
          stroke="#6ABA9B"
          stroke-width="0.5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M628.078 1260L642.315 1260.23L642.681 1237.3L628.445 1237.08L628.401 1239.93L628.078 1260Z"
          fill="#AAE0CB"
          stroke="#6ABA9B"
          stroke-width="0.5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1261.88 666.713L1284.24 669.912L1286.35 655.542L1263.61 652.654L1261.88 666.713Z"
          fill="#AAE0CB"
          stroke="#6ABA9B"
          stroke-width="0.5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M968.453 917.402L976.495 920.856L982.898 905.966L974.855 902.505L968.453 917.402Z"
          fill="#AAE0CB"
          stroke="#6ABA9B"
          stroke-width="0.5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M713.995 1065.27L761.326 1064.56L761.072 1048.27L758.948 1048.28L755.438 1046.04L754.341 1047.65L754.092 1047.19L755.798 1044.02L755.737 1036.81L756.314 1028.64L713.266 1029.32L713.995 1065.27Z"
          fill="#CDEBB0"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M836.622 898.037L881.086 892.167L877.612 865.857L833.145 871.739L836.622 898.037Z"
          fill="#CDEBB0"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M625.231 1286.66L634.952 1289.43L655.34 1295.36L683.887 1294.7L684.892 1276.54L648.483 1275.25L629.155 1270.33L625.231 1286.66Z"
          fill="#CDEBB0"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M675.884 875.418L701.955 875.697L713.155 884.814L741.677 884.636L748.264 885.004L757.294 889.312L755.721 883.001L751.235 882.935L744.178 876.898L744.279 864.838L688.257 865.81L688.231 868.473L677.571 869.057L675.884 875.418Z"
          fill="#CDEBB0"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M818.304 1081.34L832.813 1075.35L833.72 1050.38L825.26 1046.39L816.598 1065.46L818.304 1081.34Z"
          fill="#CDEBB0"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M913.767 992.404L915.871 998.613L937.543 1002.27L940.422 993.728L939.124 986.202L915.494 985.158L914.408 989.721L913.767 992.404Z"
          fill="#CDEBB0"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M816.088 1032.03L823.266 1037.54L825.96 1031.84L827.47 1027.47L831.506 1024.82L833.573 1019.69L826.989 1016.84L823.684 1019.54L819.313 1026.74L816.088 1032.03Z"
          fill="#CDEBB0"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M998.028 1121.23L1003.97 1122.07L1009.33 1122.84L1013.2 1121.72L1015.41 1115.99L999.089 1113.69L998.028 1121.23Z"
          fill="#CDEBB0"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1255.72 1162.83L1282.44 1180.98L1305.17 1182.75L1336.41 1182.49L1360.38 1179.31L1361.64 1013.84L1299.7 1013.61L1287.9 1054.28L1273.84 1119.11L1255.72 1162.83Z"
          fill="#C7C7B4"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M787.323 1208.2L789.925 1210.37L795.261 1203.9L792.578 1201.78L787.323 1208.2Z"
          fill="#AAD3DF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1126.44 685.871L1130.16 691.728L1138.23 697.188L1149.39 700.38L1161.74 705.143L1173.59 708.233L1181.77 708.677L1192.43 708.722L1200.6 706.232L1210.44 702.592L1214.81 698.075L1212.95 695.141L1208.84 695.506L1204.77 694.701L1202 690.446L1197.75 689.955L1194.02 695.544L1188.05 694.448L1184.42 687.697L1182.55 683.297L1175.69 683.816L1174.58 676.948L1176.32 670.5L1174.68 666.071L1169.98 665.653L1167.84 661L1159.95 663.742L1150.41 663.516L1144.31 661.559L1136.31 663.727L1134.66 667.812L1130.09 668.25L1126 675.963L1126.44 685.871Z"
          fill="#AAD3DF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1282.53 808.426L1283.56 811.66L1288.57 819.531L1293.98 823.585L1297.52 825.484L1300.55 829.504L1304.12 831.136L1312.17 833.073L1320.9 826.564L1325.81 817.957L1333.11 807.856L1336.08 797.261L1333.21 794.237L1328.27 791.546L1308.11 791.471L1304.98 794.183L1299.78 804.124L1295.58 805.477L1291.63 803.137L1286.27 803.663L1282.53 808.426Z"
          fill="#AAD3DF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1252.07 1244.11L1254.18 1254.05L1260.72 1255.64L1268.25 1254.34L1268.65 1249.43L1268.92 1241.56L1265.58 1230.56L1261.2 1203.1L1257.24 1201.78L1253.71 1205.16L1254.96 1208.7L1252.07 1244.11Z"
          fill="#AAD3DF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M754.261 957.472L754.73 959.846L755.591 961.927L762.713 963.673L764.729 962.015L765.475 960.672L764.954 959.086L764.473 957.716L764.307 953.414L764.976 949.409L764.833 945.769L763.782 944.153L762.278 943.513L760.325 943.938L758.585 945.1L757.96 946.649L758.202 948.723L761.588 952.847L761.744 955.488L761.616 957.396L760.251 957.616L758.635 956.325L758.136 954.846L756.78 953.506L755.31 953.639L754.443 955.33L754.261 957.472Z"
          fill="#AAD3DF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M941.344 1085.38L966.628 1089.23L967.303 1084.82L942.018 1080.97L941.344 1085.38Z"
          fill="#AAD3DF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M729.953 1042.78L730.764 1044.9L731.632 1046.33L733.287 1047.3L734.941 1047.55L736.739 1046.57L737.661 1043.92L737.497 1042.11L736.831 1040.61L735.014 1039.37L733.865 1039.09L732.348 1039.16L730.792 1039.71L729.922 1041.21L729.953 1042.78Z"
          fill="#AAD3DF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1012.39 1003.64L1013.02 1005.89L1013.52 1007.84L1016.05 1005.89L1015.81 1003.35L1013.88 1001.52L1012.39 1003.64Z"
          fill="#AAD3DF"
        />
        <path
          d="M1323.44 663.405L1323.39 673.04"
          stroke="#808080"
          stroke-width="5.3"
          stroke-dasharray="4 2"
        />
        <path
          d="M1306.22 663.411L1323.44 663.405L1339.75 663.391"
          stroke="#808080"
          stroke-width="5.3"
          stroke-dasharray="4 2"
        />
        <path
          d="M1015.41 1116L1013.21 1121.73L1009.34 1122.86L1003.98 1122.08"
          stroke="#444444"
          stroke-width="0.4"
        />
        <path
          d="M913.646 967.652L915.484 970.054L924.362 970.837L925.976 971.084L928.684 951.475L927.307 951.617L925.942 953.194L913.646 967.652Z"
          stroke="#808080"
        />
        <path
          d="M1246.78 1157.7L1263.27 1130.73L1279.9 1080.98"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1202.92 814.117L1217.6 812.566L1236.98 818.396L1257.22 825.094L1266.54 825.232L1274.91 828.66"
          stroke="#BBBBBB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M827.757 871.471L825.097 851.749"
          stroke="#BBBBBB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M645.394 820.562L644.91 775.832L645.074 746.223L631.127 746.173L631.223 775.827L631.314 816.537"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M631.219 775.828L644.906 775.833L654.412 775.751L658.473 775.612L658.537 815.645"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M645.074 746.223L657.828 746.212L657.718 762.982L654.192 764.819L654.416 775.75"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M622.392 904.771L631.935 904.6L645.226 904.582L646.99 904.63L658.747 904.938L658.592 866.066"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M645.222 904.582L645.268 866.098"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M668.298 866.779L681.183 865.469L680.937 834.905"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1295.79 652.029L1295.31 659.391L1295.36 675.291L1294.89 687.324L1295.06 696.091L1327.78 696.186L1344.14 696.229"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1294.89 687.324L1319.8 688.031"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1257.98 633.069L1298.65 633.531"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1258.07 576.903L1267.12 579.737L1266.98 610.619L1263.95 614.724L1257.75 615.293"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1337.53 553.187L1330.17 560.536L1292.23 561.079"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1337.52 581.89L1337.56 570.567L1359.35 571.231"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1337.52 581.89L1344.48 581.83L1359.53 581.873"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1344.48 581.831L1344.63 590.071L1343.19 593.084L1337.39 595.039"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1104.62 955.624L1111.99 955.506L1120.52 955.66L1132.46 957.217L1140.41 958.259L1154.9 960.3L1155.41 956.744"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1104.78 887.415L1111.43 887.71L1117.43 886.915L1122.49 884.988L1129.57 881.321L1132.22 879.937L1140.82 879.66L1153.07 879.652L1158.26 878.734L1164.07 877.711L1170.15 875.539L1182.62 863.26L1188.81 858.442L1193.98 854.868"
          stroke="#BBBBBB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1377.47 626.226L1371.54 626.307L1364.62 626.406L1364.51 618.56"
          stroke="#BBBBBB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1364.62 626.407L1364.66 641.658"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1166.77 560.222L1219.72 560.258L1252.19 560.421"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1166.51 571.615L1219.87 571.4L1252.27 571.206"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M670.644 1109.06L667.318 1108.73L659.414 1108.93L656.105 1108.65L646.814 1108.69L646.607 1084.69L659.474 1084.74L670.191 1084.74L670.644 1109.06Z"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M659.411 1108.93L659.47 1084.74"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M720.978 1225.34L732.782 1225.35L732.17 1248.03L733.738 1256.15L736.193 1268.38"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M733.734 1256.15L721.277 1256.06"
          stroke="#BBBBBB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1153.32 1157.34L1159.5 1161L1169.89 1167.16L1184.34 1172.24L1198.42 1172.53L1215.74 1171.36L1227.99 1168.79L1239.41 1163.64L1246.78 1157.7"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1101.17 1141.2L1093.56 1196.19"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1112.11 1142.75L1104.62 1196.28"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1122.6 1144.23L1115.51 1196.37"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1133.58 1145.79L1126.42 1196.46"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1078.68 1143.26L1071.02 1196.01L1082.81 1196.1L1093.56 1196.19L1104.62 1196.28L1115.51 1196.37L1126.43 1196.46L1138.42 1196.56L1150.42 1196.72"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1089.75 1144.96L1082.81 1196.1"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1114.25 1205.81L1113.6 1218.4L1113.45 1221.41L1111.11 1271.53"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1135.87 1205.98L1135.49 1218.55L1135.39 1221.69L1132.73 1271.53"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1070.36 1220.86L1070.66 1216.19L1071.32 1205.83"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1103.11 1205.81L1102.72 1218.38L1102.62 1221.27L1100.1 1271.53"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1082.14 1205.45L1081.28 1218.18L1081.09 1221L1080.6 1229.7L1078.24 1271.54"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1080.6 1229.7L1070.06 1229.66L1065.88 1271.32L1078.24 1271.54L1089.28 1271.54L1100.1 1271.53L1111.11 1271.53L1122.34 1271.53L1132.73 1271.53L1146.42 1271.53L1241.6 1270.29"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1012.76 1232.87L1007.34 1275.9"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1051.11 1178.28L1047.87 1177.81L1025.82 1174.55"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1025.63 1185.55L1025.82 1174.55"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1001.85 1220.79L1000.44 1232.18L998.841 1245.04"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M962.759 810.722L969.463 809.603"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M964.449 823.882L976.812 822.054"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1278.76 1272.48L1288.27 1273.07L1288.32 1221.12"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1025.43 737.166L1025.77 745.891L1021.46 745.942L998.523 746.192L998.117 737.331L998.865 734.576L998.857 716.555"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M998.857 716.555L1024.64 717.252L1025.43 737.166"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1025.43 737.165L1050.56 737.224L1049.86 717.021L1024.65 717.252"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1050.56 737.225L1074.98 737.377"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1102.64 755.478L1095.53 756.535L1087.64 756.558L1021.57 756.769L1021.47 745.942"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M966.989 719.298L981.347 720.821"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M863.02 730.471L868.227 730.718L876.867 731.127L876.971 738.905"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M935.812 707.057L935.94 710.261L935.958 720.597"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M932.669 720.58L932.748 725.719L932.819 730.487L904.871 730.415"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1202.44 1249L1202.34 1236.66"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1214.69 1249.2L1214.56 1236.56"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1227.15 1249.4L1227.17 1236.74"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1241.6 1270.29L1241.24 1260.15L1241.16 1249.62L1240.86 1236.66"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1147.68 1248.12L1182.58 1248.69L1192.49 1248.84L1202.44 1249L1214.69 1249.2L1227.15 1249.4L1241.15 1249.63"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1147.11 1258.73L1241.24 1260.15"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1223.86 506.67L1223.73 480.498"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1110.2 572.475L1105.11 612.397L1090.89 613.672L1087.81 613.511"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1292.36 651.702L1288.52 659.134L1286.74 672.428L1284.46 674.581L1280.8 675.683L1266.11 674.728L1264.54 677.616L1264.42 680.014"
          stroke="#BBBBBB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1295.06 696.091L1296.06 704.456"
          stroke="#BBBBBB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M648.492 1218.15L648.267 1206.6L647.955 1194.67L647.942 1182.79L647.729 1172.96L648.233 1169.29L647.687 1164.14"
          stroke="#BBBBBB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M721.329 1267.57L718.58 1267.55L714.743 1267.51L644.9 1266.88"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M637.698 1171.21L637.823 1195.59L633.027 1190.45L628.924 1191.6L629.972 1172.27L637.698 1171.21Z"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1025.82 1174.55L1026.36 1167.32L1049.04 1170.28L1052.24 1170.7"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1192.49 1248.84L1192.53 1236.47"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1182.58 1248.69L1182.71 1236.69"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1197.49 851.924L1200.37 849.724L1203.25 849.221L1206.71 852.147L1211.16 858.003L1215.6 864.406L1217.77 868.46L1217.82 871.641L1215.74 875.509L1212.2 877.565L1207.62 876.641L1203.24 873.857L1196.26 864.546L1193.86 860.165L1193.97 854.869L1197.49 851.924Z"
          stroke="#BBBBBB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1088.86 499.063L1097.15 500.099L1104.66 504.508L1107.37 507.636L1108.71 507.927L1110.54 508.316L1115.88 508.229L1122.55 508.125L1133.95 507.949L1135.59 505.473L1135.28 490.903"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1121.98 491.683L1122.55 508.125"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1108.54 491.637L1108.72 507.925"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M631.909 866.281L631.931 904.6"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M764.306 982.004L698.483 982.262"
          stroke="#BBBBBB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M904.871 730.415L904.802 725.805L932.748 725.719"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M932.679 720.579L935.962 720.596L935.97 723.527L948.773 723.599"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1327.79 696.185L1328.13 704.003L1329.3 706.731L1335.15 711.396L1338.55 714.683L1340.44 728.979"
          stroke="#BBBBBB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1068.2 836.246L1068.59 839.64L1069.46 847.117L1071.93 868.35L1059.56 868.781L1049.26 869.13"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1067.68 832.981L1079.51 832.265L1083.51 828.571L1093.3 824.954L1095.63 824.712L1104.12 824.617"
          stroke="#BBBBBB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1080.87 834.112L1075.45 837.683L1070.92 838.977L1068.59 839.641"
          stroke="#BBBBBB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1257.38 544.618L1258.08 576.902L1257.97 589.161L1257.76 615.293L1257.85 622.941L1257.98 633.069L1259.68 640.443L1261.84 642.292L1281.26 648.187L1292.36 651.702L1295.79 652.028L1312.01 646.862L1316.89 646.872L1354.02 646.946L1367.37 646.957"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M647.959 1194.67L637.827 1195.59"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M626.68 1124.23L626.861 1141.51L630.855 1157.4L636.438 1160.68L647.69 1164.14L672.517 1163.6L729.133 1163.73L737.446 1162.48L742.337 1162.07"
          stroke="#BBBBBB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M742.329 1162.07L770.103 1162.41L780.118 1163.35L793.67 1165.7"
          stroke="#BBBBBB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M668.4 914.961L668.764 924.232L668.373 952.287L668.471 967.666L682.75 967.667L683.255 976.931L685.34 1017.22L688.078 1056.76L687.962 1097.24L688.273 1118.93L729.724 1120.21L729.536 1155.94L729.129 1163.73"
          stroke="#999999"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M834.512 1173.5L845.627 1173.83L849.281 1174.51L851.897 1176.68L852.622 1180.86L853.128 1186.42L853.455 1243.73L853.561 1264.8L850.053 1269.16L847.131 1270.75L843.693 1271.51"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M843.697 1271.51L836.382 1278.2"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M961.411 971.525L962.129 965.119L955.424 945.118L955.895 920.045L964.316 903.73L977.198 891.876L982.288 888.592L990.601 884.785"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M626.676 1124.23L624.301 1117.39L623.633 1043.67L623.579 1021.72L623.046 980.183L622.766 958.357L622.581 939.209L622.351 915.658L622.414 909.701L622.388 904.771L622.394 840.888L622.232 821.397"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M862.695 753.63L864.902 758.98L868.434 762.736L875.115 766.761L881.902 768.394L888.801 767.276L910.871 764.405L938.772 768.754L955.277 772.139L960.697 777.815"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M670.644 1109.06L670.688 1113.12L672.514 1163.6"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1093.27 553.755L1092.49 558.597L1088.92 600.47L1087.81 613.511L1087.08 622.641L1084.46 655.539L1084.87 681.57"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1057.33 1230.58L1052.33 1256.55L1046.48 1290.66L1039.49 1303.96"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1149.1 1221.76L1148.18 1238.88L1147.69 1248.12L1147.11 1258.73L1146.42 1271.53L1147.64 1290.12"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1061.01 674.81L1071.28 657.573L1079 635.329L1082.61 599.911L1084.27 583.556L1087.44 559.089L1086.04 552.921"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M622.355 915.657L629.822 915.563L643.553 915.45L646.466 915.433L662.076 915.097L668.404 914.96"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M631.336 735.346L626.722 731.238L624.465 727.221L623.568 725.632L624.58 718.494L627.691 711.616L632.048 708.873L635.981 706.883L639.806 705.84L646.325 704.878L655.524 707.9L659.671 712.253L664.82 718.139L667.101 725.677L665.29 727.745L662.32 731.123L657.091 734.77L652.173 737.769L645.873 739.04L638.809 738.218L631.336 735.346Z"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M665.293 727.744L668.975 742.04L667.763 794.892L667.699 797.763L667.62 801.254L667.831 815.249L663.172 820.082"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1088.41 693.716L1087.24 699.554L1084.96 704.001L1080.29 708.764L1074.86 711.524L1067.23 712.424L1060.61 710.7L1055.63 707.43L1051.06 701.31L1049.15 693.438L1051.34 683.824L1055.04 678.809L1061 674.811L1070.36 673.265L1079.64 676.472L1084.87 681.569L1087.64 687.331L1088.41 693.716Z"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1102.25 749.163L1087.79 726.919L1081.48 722.583L1067.23 712.424"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1088.4 693.717L1093.98 711.558L1100.26 731.033L1102.24 749.164"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M862.696 753.63L863.039 738.184L863.02 730.472L862.98 714.047L862.724 708.224L862.409 702.063"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1102.25 749.163L1102.64 755.478L1103.72 773.07"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1057.49 1215.7L1059.61 1218.41L1060.78 1223.09L1060.17 1226.47L1059.29 1228.29L1057.33 1230.58L1054.37 1232.33L1049.33 1232.85L1046.08 1231.72L1043.08 1229.18L1041.25 1225.36L1041.32 1220.51L1042.88 1217.24L1045.75 1214.59L1048.96 1213.35L1051.69 1213.2L1055.01 1214.07L1057.49 1215.7Z"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1045.75 1214.6L1048.77 1193.96L1051.1 1178.28L1051.58 1175.08L1052.23 1170.7L1055.22 1150.6L1061.84 1137.3"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M622.236 821.396L622.479 748.929L622.241 739.021L624.469 727.22"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1062.86 1134.25L1073.29 1137.24L1101.17 1141.2L1112.11 1142.75L1122.6 1144.23L1133.58 1145.79L1144.04 1147.28L1151.56 1152.27L1153.31 1157.34"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1153.31 1157.34L1151.28 1185.59"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1153.32 1157.34L1156.06 1150.91L1157.2 1148.22L1151.52 1132.56L1150.42 1110.97L1150.97 1101.7L1154.26 1078.93L1157.22 1055.41"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M742.329 1162.07L743.952 1176.26L746.288 1217.06L748.858 1221.4L762.313 1219.4L769.905 1222.22L774.671 1226.47L777.643 1227.8L786.396 1225.39L796.751 1225.25L799.206 1229.96L796.742 1235.8L790.377 1238.28L782.353 1235.45L777.643 1227.8"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M929.716 838.872L949.449 836.428L979.058 832.755"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M825.089 851.75L877.744 845.27L883.595 844.554L924.119 839.568L929.712 838.873"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1055.63 707.431L1041.4 705.484L998.426 705.998L981.77 706.324L966.632 706.568L935.807 707.058L862.716 708.225L831.339 709.275L792.926 709.938L771.585 710.31L702.627 711.493L697.052 711.587L689.558 712.029L677.988 715.169L667.097 725.677"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1151.88 546.472L1151.96 556.196L1149.73 559.525L1144.56 562.268L1116.15 568.546L1110.2 572.475"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M613.473 910.024L622.41 909.702"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1178.16 545.938L1177.82 522.186L1223.93 521.056"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1219.87 571.399L1219.73 560.257L1219.53 545.269"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1337.73 543.854L1337.53 553.187L1337.57 570.567"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1008.45 1304.09L1028.78 1290.03L1039.05 1279.37"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M698.932 967.472L698.396 977.537L683.256 976.931"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M698.392 977.537L698.48 982.263L698.693 993.889L707.714 993.818"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M667.745 820.664L667.29 823.764L667.877 832.057L668.298 866.779L668.4 914.961"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M667.877 832.057L676.353 828.205L686.388 820.667"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M646.326 704.878L668.526 705.467L685.068 704.977L696.873 705.115L702.543 704.998L771.433 703.616L792.972 703.366L831.258 702.914L862.405 702.064L935.724 701.208L966.488 700.756L981.858 700.525L1014.73 699.532L1030.01 695.304L1041.59 692.1L1051.34 683.825"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M970.032 1219.39L974.372 1219.58L1001.84 1220.79L1009.93 1220.73L1041.31 1220.51"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M827.856 1090.62L825.008 1108.84L820.889 1118.18L817.31 1132.26L816.621 1160.92L816.742 1167.37"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M720.277 1304.13L720.959 1294.4L721.333 1267.57L721.281 1256.06L720.978 1225.34L720.914 1221.8L719.396 1218.38"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1061.65 1176.8L1051.58 1175.08"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M940.259 812.471L939.193 805.331L963.788 801.8"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1241.6 1270.29L1267.78 1271.79L1275.28 1272.26L1278.76 1272.48"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1267.78 1271.79L1267.34 1286.06L1267.32 1295.06L1267.31 1304.76"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M966.486 700.756L966.634 706.568L966.714 709.744L966.989 719.298"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M981.355 720.82L984.149 754.036"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M706.514 923.201L706.241 900.436"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1240.86 1236.66L1240.78 1189.16"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1223.73 480.498L1226.19 478.061L1226.12 459.54"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1224.7 545.161L1223.93 521.056L1223.86 506.67"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1105.11 612.396L1131.24 609.172L1133.4 624.168"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M702.543 704.997L702.631 711.492L702.327 718.477L702.327 724.253"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1041.36 1250.69L1040.16 1234.43L1037.74 1229.42L1033.58 1226.22L1021.62 1223.15L1009.93 1220.73"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1052.34 1256.55L1053.83 1293.3L1057.69 1299.8L1064.83 1304.02"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M606.494 714.778L627.691 711.616"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M685.345 1017.22L681.59 1017.67L672.034 1019.04L623.583 1021.72"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M819.755 814.768L836.669 812.632L836.524 777.802L836.936 768.585L840.226 761.812L849.302 760.118L862.688 753.631"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1103.72 773.069L1104.12 824.617L1104.14 827.312L1104.22 837.337L1104.62 874.352L1104.82 881.374L1104.78 887.416L1104.75 899.302L1104.7 920.09L1104.62 955.624L1104.54 982.055L1094.46 1036.74L1090.03 1056.24L1087.86 1067.56L1082.48 1089.08L1068.64 1119.8L1062.86 1134.25L1061.84 1137.3"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M719.395 1218.38L694.58 1218.48L675.844 1218.35L648.492 1218.15"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1039.49 1303.96L1037.5 1290.33L1039.05 1279.37L1041.35 1250.69L1043.08 1229.18"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M623.569 725.632L616.73 719.821L606.494 714.778"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M779.693 819.229L775.417 819.724L763.234 821.146L734.23 821.058L723.953 821.066L686.392 820.666L675.044 821.103L667.749 820.663L663.173 820.082L645.398 820.561L622.236 821.396"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M667.76 794.893L675.088 794.774L684.527 794.62"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M825.089 851.75L819.755 814.768"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M721.319 922.71L720.787 891.08"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M990.599 884.786L1006.95 881.996L1022.22 881.747L1049.73 881.636L1089.07 881.402L1095.8 881.526L1104.82 881.375"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M960.699 777.814L963.04 790.783L963.792 801.8L969.467 809.602L976.13 818.774L976.82 822.053L979.064 832.754L980.966 848.405L984.049 873.781L990.607 884.785"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M682.746 967.667L691.627 967.635L698.929 967.473L708.498 967.412"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1151.29 1185.59L1150.42 1196.72L1149.11 1221.76"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1060.77 1223.09L1070.36 1220.86L1081.08 1221L1092.14 1221.14L1102.62 1221.27L1113.44 1221.41L1124.85 1221.56L1135.39 1221.69L1141.55 1221.72L1149.1 1221.76"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M970.036 1219.39L966.469 1220.82L963.357 1222.66L962.579 1224.53L961.701 1226.62L961.616 1231.6"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M959.069 1231.41L958.77 1226.8L958.596 1223.83L958.768 1222.66"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M963.353 1222.66L961.306 1223.29L958.764 1222.66L957.991 1221.08L958.097 1218.02L960.472 1216.24L963.597 1216.33L967.713 1217.07L971.646 1217.62L974.372 1219.58"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1067.68 832.981L1054.97 833.853L1044.51 834.871"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1054.97 833.852L1059.57 868.781"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1044.51 834.871L1049.26 869.13"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1061.85 1137.3L1064.43 1151.76L1061.65 1176.8L1059.64 1195.01L1057.5 1215.7"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M843.701 1271.51L839.329 1270.72L836.198 1267.52"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M822.041 1253.5L827.096 1259.74L831.995 1263.9L836.194 1267.52"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1385.7 543.485L1377.68 543.561L1369.88 543.626L1337.73 543.854L1308.6 543.936L1292.95 544.148L1257.38 544.618L1224.7 545.162L1219.53 545.27L1178.15 545.938L1151.88 546.471L1110.4 547.022"
          stroke="#8F8F8F"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1093.82 543.803L1095.3 545.452L1096.06 547.396L1096.17 548.54L1095.82 550.599L1094.78 552.405L1093.72 553.401L1093.27 553.755L1091.86 554.331L1089.78 554.558L1087.76 554.065L1086.03 552.922L1084.71 551.43L1084.23 549.473L1084.28 547.388L1084.48 546.367L1084.98 545.538L1086.33 543.948L1088.14 542.909L1090.2 542.561L1092.25 542.928L1093.82 543.803Z"
          stroke="#8F8F8F"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M741.635 1041.17L739.296 1042.23"
          stroke="white"
          stroke-opacity="0.4"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1109.68 990.232L1115.78 991.347"
          stroke="white"
          stroke-opacity="0.4"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1132.24 961.842L1132.46 957.216"
          stroke="white"
          stroke-opacity="0.4"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1151.79 1036.85L1164.67 1036.82"
          stroke="white"
          stroke-opacity="0.4"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1173.96 957.39L1163.94 956.44"
          stroke="white"
          stroke-opacity="0.4"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1155.66 1054.54L1148.76 1053.6"
          stroke="white"
          stroke-opacity="0.4"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1296.06 704.456L1297.4 708.949L1295.31 711.937L1295.51 721.602L1292.43 728.895L1288.49 734.034"
          stroke="white"
          stroke-width="2.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1069.46 847.117L1080.07 845.713L1083.07 868.194L1071.93 868.35"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M830.339 1301.08L824.314 1291.18L824.676 1281.13L823.236 1266.16L822.041 1253.5"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1367.37 646.957L1363.9 663.675L1359.01 664.968"
          stroke="#EAEAEA"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="6 6"
        />
        <path
          d="M835.78 1280.17L838.12 1286.54L840.486 1291.78L844.986 1297.07L849.542 1299.64L858.032 1301.68"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M835.776 1280.17L833.732 1291.63L830.339 1301.08"
          stroke="#EAEAEA"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="6 6"
        />
        <path
          d="M822.041 1253.5L822.032 1210.79L821.404 1204.21L819.593 1197.82L815.788 1187.04L814.309 1180.36L814.658 1177.61L816.148 1175.21L818.939 1173.92L821.999 1173.46L834.516 1173.5"
          stroke="#EAEAEA"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="6 6"
        />
        <path
          d="M834.52 1173.5L835.01 1197.81L836.198 1267.52"
          stroke="#EAEAEA"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="6 6"
        />
        <path
          d="M836.194 1267.52L836.381 1278.2"
          stroke="#EAEAEA"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="6 6"
        />
        <path
          d="M1119.8 687.9L1121.49 671.989"
          stroke="black"
          stroke-width="4.3"
          stroke-linejoin="round"
        />
        <path
          d="M1372.02 798.697L1368.03 806.394L1360.34 808.545L1351.63 810.999L1345.36 814.783L1339.41 820.191L1336.08 827.437L1331.92 833.012L1322.97 838.6L1315.76 839.641L1304.18 836.064L1297.76 829.426L1267.89 801.201L1245.83 804.319"
          stroke="black"
          stroke-width="4.3"
          stroke-linejoin="round"
        />
        <path
          d="M960.687 1088.85L962.595 1072.16"
          stroke="black"
          stroke-width="4.3"
          stroke-linejoin="round"
        />
        <path
          d="M1148.18 1238.88L1188.93 1238.15L1193.29 1237.79L1195.55 1234.88L1195.65 1232.19"
          stroke="black"
          stroke-width="3.5"
          stroke-linejoin="round"
        />
        <path
          d="M760.965 1135.82L761.946 1130.41"
          stroke="black"
          stroke-width="4.3"
          stroke-linejoin="round"
        />
        <path
          d="M940.484 1069.47L938.89 1086.16"
          stroke="black"
          stroke-width="4.3"
          stroke-linejoin="round"
        />
        <path
          d="M1089.21 529.178L1091.78 538.245L1093.83 543.798"
          stroke="#8F8F8F"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1084.99 545.533L1087.62 537.253L1089.21 529.178"
          stroke="#8F8F8F"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1110.4 547.019L1093.72 553.397"
          stroke="#8F8F8F"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1095.31 545.447L1110.4 547.018"
          stroke="#8F8F8F"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1030.89 1046.66L1029.91 1056.83L1063.87 1062.18L1067.43 1062.69L1075.04 1063.89"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1063.87 1062.17L1065.42 1052"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1067.08 1030.91L1064.86 1042.47L1037.03 1037.7L1039.11 1025.82"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M998.431 705.997L998.57 708.946L998.857 716.555"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1067.42 1062.7L1066.49 1071.64L1066.19 1074.51"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1104.14 827.311L1094.11 827.162L1085.25 830.122L1080.87 834.111L1068.2 836.245"
          stroke="#BBBBBB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1064.86 1042.47L1067.23 1049.15L1070.45 1052.74"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1074.45 1029.56L1071.05 1049.73L1070.45 1052.74"
          stroke="#BBBBBB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M830.339 1301.08L824.315 1291.18L824.676 1281.13L823.236 1266.16L822.041 1253.5"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1367.37 646.957L1363.9 663.675L1359.01 664.968"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M835.78 1280.17L838.12 1286.54L840.486 1291.78L844.986 1297.07L849.542 1299.64L858.032 1301.68"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M835.776 1280.17L833.732 1291.63L830.339 1301.08"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M822.041 1253.5L822.032 1210.79L821.404 1204.21L819.593 1197.82L815.788 1187.04L814.309 1180.36L814.658 1177.61L816.148 1175.21L818.939 1173.92L821.999 1173.46L834.516 1173.5"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M834.52 1173.5L835.01 1197.81L836.198 1267.52"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M836.194 1267.52L836.381 1278.2"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1090.03 1056.24L1079.47 1054.13L1070.45 1052.74L1065.42 1052L1030.89 1046.65L1028.5 1046.32"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1125.01 1304.92L1138.79 1300.39L1143.61 1296.92L1145.02 1294.55L1147.64 1290.12"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1147.64 1290.12L1148.59 1294.41L1149.27 1297.45L1153.56 1304.68"
          stroke="#BBBBBB"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1039.11 1025.81L1067.08 1030.9"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1004.91 1011.01L1009.09 1011.32L1011.94 1010.36L1013.52 1007.86"
          stroke="#AAD3DF"
          stroke-width="3"
        />
        <path
          d="M682.395 1020.6L681.583 1017.68"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1158.33 1078.41L1154.25 1078.94"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M676.16 1223.43L675.841 1218.35L675.693 1215.96"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M940.652 1067.29L940.493 1069.47"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1157.22 1055.41L1155.67 1054.54"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M972.231 1139.39L1001.82 1142.6L1004.54 1124.64L1006.71 1124.6"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1119.05 666.012L1107.11 670.568"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1097.92 657.344L1100.31 659.726L1102.94 666.06L1107.11 670.568L1107.67 673.758L1105.5 677.762L1111.44 688.521"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M824.125 1070.81L825.296 1071.72L827.229 1073.21L829.981 1078.49"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M834.934 1060.32L829.877 1059.01"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M823.411 1081.03L824.836 1076.31"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M825.283 1073.78L825.299 1071.72"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M815.23 1063.58L819.023 1066.03L821.836 1066.08"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M824.673 1065.76L827.085 1065.4L829.132 1062.27L829.881 1059.01L829.905 1050.67L830.06 1046.74"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M819.019 1066.03L819.485 1068.93L820.737 1071.45"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1113.39 981.591L1104.57 982.053L1096.85 982.211L1074.72 982.898L1070.09 982.95L1032.41 983.083L1011.74 983.157L993.492 982.774L970.197 982.875L958.399 982.831L912.612 981.737"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M662.106 915.096L662.167 917.392L662.416 926.365L662.508 952.282L663.487 1011.54L627.783 1011.59"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M785.962 804.741L779.728 819.228"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M977.24 891.874L974.34 889.29L955.291 904.423L929.177 907.514L903.258 910.241L892.393 911.372L886.123 912.555L867.761 916.266L834.694 921.813L813.457 922.09L787.285 922.436"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M878.271 926.674L884.021 927.026L889.694 927.391L896.543 933.513L929.431 937.653L927.345 951.615"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M896.55 933.512L899.837 962.661L900.706 970.027L900.991 987.215"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M867.773 938.199L867.759 962.941L883.147 985.003"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M786.827 962.957L819.402 963.578L825.808 965.724L838.042 965.48L838.704 963.566L846.144 963.528L867.755 962.942"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M707.756 993.815L709.41 1000.67L712.864 1000.5L773.726 999.926L774.167 1007.93L787.431 1007.92L828.446 1008.15L841.546 1008.22L855.371 1011.72L871.768 1013.62L872.994 1014.6L874.171 1015.5"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M668.799 924.23L674.921 924.139L706.548 923.2L721.354 922.708L787.277 922.437"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M686.653 863.469L687.778 863.454L726.877 863.413L734.176 863.406L776.178 863.281L775.447 819.723"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M894.271 905.234L892.394 911.372L889.702 927.39"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M867.811 1122.95L867.08 1133.85L866.326 1150.74L867.821 1159.96L865.611 1167.03L863.057 1179.35L863.657 1206.04L862.387 1225.2L862.156 1238.63L862.115 1241.77L862.093 1243.72L862.058 1246.93L861.733 1274.77L860.68 1276.37L855.679 1283.92L842.724 1290.23"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M801.372 1091.69L802.891 1090.8L816.656 1084.32L823.411 1081.03L829.981 1078.49L834.595 1076.67L864.046 1064.15"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1241.87 673.798L1232.72 686.373L1224.35 697.861L1222.09 700.907"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M846.14 963.528L873.353 999.474"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M845.94 938.314L846.14 963.528L845.372 1002.93L841.543 1008.23"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M892.394 911.372L903.232 915.859L944.634 922.205L943.662 930.943L940.461 953.314"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M827.795 871.469L831.274 870.909L833.517 888.313L834.002 892.061L856.65 889.096L867.453 888.956L879.362 889.18"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M779.477 824.95L817.845 820.781L824.282 871.868L827.787 871.47"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M974.335 889.291L980.106 886.578L982.342 883.583L982.004 877.255L977.975 877.053L974.431 849.227"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M961.446 971.524L960.527 977.369L958.395 982.832L954.167 1007.37L950.365 1026.04"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1011.74 983.157L1011.67 986.397L1008.1 1001.06L1003.88 1007.99L1000.1 1010.51L993.052 1011.13L989.242 1024.75"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1027.99 1050.56L1025.93 1066.35L1024.45 1077.71"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M945.397 1024.86L948.304 1025.47L945.867 1048.96L943.706 1067.66"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M942.344 930.665L943.663 930.943L945.98 931.085"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M913.688 967.649L913.506 969.838L912.612 981.737L911.555 989.132"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M928.727 951.472L938.553 953.107L940.457 953.315L954.826 952.787"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M929.431 937.653L930.087 931.407"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M815.23 1063.58L824.635 1044.18L836.316 1020.39L841.546 1008.22"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1159.9 948.424L1162.4 945.692L1162.3 895.08L1133.21 895.006"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1132.03 896.145L1133.21 895.006L1134.45 885.287L1140.06 881.571L1139.38 887.035"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1134.45 885.287L1129.6 881.32"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1140.06 881.571L1142.83 886.708L1144.07 889.01"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1354.06 646.944L1358.15 642.316L1364.69 641.657"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M752.917 938.749L753.297 965.057"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M685.367 817.274L692.304 816.201L703.485 815.953L712.475 813.307L718.37 816.303L730.262 817.056L731.917 812.908L734.338 807.917"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1179.32 886.984L1184.83 883.83L1192.9 883.216L1206.07 884.799L1280.52 910.045L1302.12 910.149"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M730.262 817.056L735.582 817.616L741.852 811.167L742.976 808.094"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M796.793 1225.25L805.344 1223.64L810.047 1221.12"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M775.19 1188.08L779.878 1185.54L785.042 1180.63L790.114 1178.88L809.705 1179.11"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1028 1050.56L1028.53 1046.31L1029.02 1043.28L1029.63 1036.71L1030.67 1030.72L1031.81 1026.14L1037.44 985.624L1011.67 986.397"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M868.761 1064.83L863.513 1089.37L860.729 1107.92L863.584 1116.74L867.815 1122.95"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M834.934 1060.32L834.598 1076.67L834.184 1082.7L834.025 1084.98L831.893 1100.6L836.69 1109.06L839.029 1110.39L844.906 1111.49L848.631 1114.03L863.583 1116.74"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M948.296 1025.47L950.365 1026.04L953.242 1026.63L955.841 1020.6L959.195 1016.07L964.383 1013.45L970.524 1012.54L976.173 1014.36L980.389 1017.84L984.042 1024.14L989.236 1024.75"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M984.046 1024.14L984.352 1030.81L983 1035.61L974.541 1045.39L969.145 1052.55"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M945.863 1048.96L954.744 1050.4L962.828 1051.71L965.122 1052.02L969.145 1052.55L977.077 1053.95"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M965.123 1052.02L963.889 1061.84L962.855 1070.04L962.638 1072.16"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M953.242 1026.63L953.48 1030.25L962.825 1051.71"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M967.28 1086.89L1005.87 1092.14L1022.04 1094.41"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1025.18 1286.02L1030.24 1279.94L1032.6 1264L1032.88 1253.58L1035.03 1232.58L1031.01 1227.34L1020.86 1224.96L1007.31 1223.26L978.868 1222.42L973.258 1243.52L974.797 1248.21L973.595 1252.99"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1084.28 1051.66L1071.09 1049.73L1067.28 1049.14L1029.03 1043.28"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1141.6 1221.71L1141.71 1218.45L1135.53 1218.54L1125.03 1218.41L1113.64 1218.4L1102.76 1218.38L1092.35 1218.31L1081.32 1218.18L1075.79 1218.03L1070.7 1216.19L1062.88 1212.8L1062.21 1198.62L1061.83 1194.1L1069.55 1145.42L1072.32 1140.97L1073.33 1137.23L1074.3 1131.67L1075.77 1123.33L1088.76 1089.95L1093.68 1069.27L1096.58 1063.53L1101.73 1042.42L1100.03 1040.7L1100.53 1037.39L1104.58 1022.37L1109.73 990.229L1113.4 981.59L1113.51 970.099L1112.03 955.503L1111.82 946.394L1112.18 943.111L1112.72 938.261L1110.97 930.551L1112.18 923.3L1112.27 918.52L1112.75 912.578L1112.08 904.183L1111.24 898.969L1111.47 887.708L1110.69 874.246"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1286.06 1218.88L1299.86 1218.57"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1294.98 1242.15L1300.33 1240.55L1313.47 1236.63L1313.8 1223.22L1321.42 1214.93L1321.26 1211.06L1318.55 1210.29L1314.19 1210.21L1312.04 1207.81L1311.5 1198.97L1283.93 1198.56L1276.49 1193.27"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1278.8 1272.47L1284.3 1285.02L1294 1295.16"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1158.48 1183.19L1257.72 1182.54L1262.18 1191.76L1267.61 1204.14L1268.3 1208.68L1271.39 1210.99L1276.17 1212.17L1276.14 1221.74"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1240.82 1189.15L1245.8 1190.65L1262.18 1191.76L1276.49 1193.27L1289.7 1196.86L1312.84 1197.22L1335.37 1195.68"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1276.17 1212.17L1279.2 1212.2L1300.04 1212.8L1299.87 1218.57L1300.34 1240.55"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1279.19 1212.2L1286.06 1218.88L1288.36 1221.11"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M675.009 938.82L674.929 924.138L674.792 913.406L671.382 906.477L672.841 870.111L674.782 868.43L678.362 867.439L687.661 867.129L687.786 863.453"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M629.801 926.281L646.366 926.321L662.42 926.365"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M691.673 967.631L698.059 962.885L705.578 963.115L710.644 965.022L753.301 965.057L772.372 965.034L772.499 938.339"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1337.55 581.889L1334.96 585.06L1334.15 589.827L1330.82 592.361L1316.96 592.424L1305.8 592.474"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1316.97 592.423L1316.08 629.329L1316.93 646.869"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1316.08 629.329L1300.97 630.534L1298.69 633.528"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1196.21 680.125L1197.72 658.582L1199.84 653.306L1201.6 650.799"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1146.19 653.9L1150.18 655.307L1167.81 654.211L1172.77 655.158L1177.31 658.004L1184.42 665.734L1189.51 670.146L1192.83 677.014L1196.22 680.124L1203.98 682.658L1210.9 688.428L1214.93 691.013L1218.95 691.98L1222.6 694.284L1224.35 697.861"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1100.27 553.036L1095.42 559.344L1090.93 613.669L1090.43 619.977L1087.61 655.557L1087.52 662.635L1087.7 670.423L1088.21 677.483L1089.52 684.841L1092.22 692.909L1097.69 709.017L1100.76 712.148L1104.27 721.016L1109.76 731.357L1112.64 741.05L1113.9 750.247L1114.84 773.218L1115.06 799.544L1115.5 850.647"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M939.588 1067.15L940.686 1067.28L943.702 1067.66L962.855 1070.04L981.403 1072.35L1024.46 1077.7"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M935.019 1099.82L937.706 1100.42L958.808 1104.61L964.325 1105.7"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M828.446 1008.15L828.31 1011.04L824.592 1017.54L822.805 1018.55L821.306 1020.63L818.336 1025.33L815.717 1029.73L811.215 1035.48"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M787.28 1023.33L786.964 1035.67L771.207 1035.49L771.249 1032.95L754.529 1033.12L738.902 1033.42L717.343 1034.38L717.966 1060.67L716.556 1066.98"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M692.419 1063.62L711.967 1062.66L717.958 1060.67L720.46 1060.58L723.987 1059.76L728.099 1057.83L731.418 1056.27L735.532 1055.94L739.883 1056.61L745.214 1057.45L748.68 1057.84"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1146.19 653.901L1134.68 653.829L1128.6 655.035L1123.37 658.938L1119.04 666.012L1115.87 672.557L1112.66 686.419L1111.44 688.521L1110.6 689.983L1103.42 705.077L1097.69 709.018L1094.02 711.556L1090.48 712.806L1090.41 724.033L1087.82 726.918L1084.94 730.183"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1111.45 688.521L1114.61 690.268L1119.84 687.898"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1184.42 665.734L1179.92 670.323L1177.95 674.467L1176.57 678.601"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1132.31 1036.28L1151.83 1036.85"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1166.12 1027.26L1164.36 1019.44L1164.38 1006.81L1165.92 999.267L1170.33 967.941L1166.34 962.276L1162.82 960.089L1163.8 956.442"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1074.3 1131.67L1140.25 1141.17L1148.2 1145.16L1156.09 1150.91L1159.1 1154.8L1159.53 1161L1158.48 1183.19"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1061.83 1194.1L1059.68 1195L1048.81 1193.96L1045.53 1193.13"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M956.603 1211.62L961.057 1169.84L964.677 1155.68L966.67 1147.69L964.605 1138.57L962.579 1129.64L962.888 1127.38L962.829 1118.23L964.317 1105.7"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M646.362 926.322L646.497 915.432L647.021 904.629"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M683.185 1097.87L677.829 1098.59L676.576 1112.59"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M764.207 1116.74L772.252 1111.61L778.085 1107.9"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M778.142 1118.06L772.253 1111.61L765.648 1103.51"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M816.661 1084.32L802.129 1101.65L801.443 1102.51"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M802.129 1101.65L802.895 1090.8L801.724 1085.03L787.93 1065.99"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M974.34 889.29L945.654 887.414L942.457 886.057L944.767 870.298L939.333 869.301L937.607 858.014L932.879 858.775L929.759 838.87"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1252.71 659.832L1248.3 665.915"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1098.01 653.596L1098.44 630.95L1095.15 625.822L1090.43 619.978"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M738.898 1033.42L740.999 1038.56L741.676 1041.17L742.283 1043.07L743.319 1044.52L745.27 1045.31"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M754.529 1033.12L754.284 1035.24L752.605 1037.75L750.487 1039.37L748.191 1040.42L746.696 1041.73L745.843 1043.56L745.274 1045.31L745.174 1047.54L745.22 1049.44L744.207 1050.28"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M818.336 1025.33L812.733 1022.74"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M815.056 1062.5L792.046 1065.92L787.93 1065.99L716.552 1066.98L692.417 1066.22"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M892.386 911.373L878.27 926.674"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M877.414 929.514L880.099 932.184L899.833 962.662"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M967.288 1086.89L966.775 1090.15L964.325 1105.7"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M729.129 1040.13L730.395 1039.02L734.486 1038.29L737.282 1038.47L738.843 1040.26L739.338 1042.23L739.589 1043.84L739.011 1045.8L737.591 1047.01L735.535 1047.98L733.454 1047.97L731.265 1046.79L729.808 1044.35L729.259 1042.27L729.129 1040.13Z"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M662.512 952.281L668.412 952.285L674.968 952.338L675.005 938.82L752.917 938.749L772.495 938.34L786.892 938.04L823.734 938.552L845.943 938.314L867.769 938.2L874.918 937.734"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M729.167 1163.73L725.182 1221.92L720.953 1221.79L717.741 1222.32L718.622 1267.55L718.276 1294.5"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1153.65 648.21L1149.1 651.96L1146.19 653.9"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1202.82 792.981L1209.81 792.066L1216.98 794.32L1235.66 799.468L1245.87 804.317L1251.05 810.593L1265.67 815.896L1276.62 823.658L1288.98 839.176L1305.38 860.849L1308.61 867.135L1312.4 881.148L1308.54 895.209L1302.12 910.149L1294.66 916.438L1280.33 939.378L1280.49 995.419L1281.1 1044.16L1274.28 1062.39L1271.87 1084.73L1262.98 1121.36L1255.96 1135.92L1247.34 1148.87L1230.78 1159.01L1216.8 1162.97L1204.65 1163.56L1190.08 1162.84L1182.64 1162.01L1166.36 1154.93L1159.23 1147.57L1153.93 1132.61L1152.61 1108.19L1155.67 1087.45L1158.37 1078.4L1163.38 1045.01L1164.72 1036.81L1166.12 1027.26L1169.61 1013.02L1175.79 999.645L1174.01 957.387L1173.24 891.875L1179.32 886.984"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1157.6 643.193L1145.28 638.099L1142.58 622.383L1133.44 624.166"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1295.4 582.92L1292.33 578.381L1292.27 561.077"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M993.048 1011.13L974.671 1011.03L970.526 1012.54"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M992.999 1191.24L994.687 1191.4L1001.38 1192.05L1045.03 1196.3"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1008.1 1001.06L1011.34 1005.21L1010.22 1008.79L1007.53 1010.07L1003.88 1007.99"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1202.82 792.982L1202.96 814.115L1205.38 818.239L1208.65 822.252"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1203.3 849.218L1207.3 844.154L1217.7 832.308"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1140.45 958.257L1138.27 962.287L1132.27 961.84L1119.51 960.887L1117.22 977.236L1121.26 980.163L1120.45 985.733L1117.68 987.536L1115.83 991.344L1113.45 1023.67"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1115.82 991.344L1117.45 991.728"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1066.53 1071.63L1057.27 1068.47L1050.81 1068.52L1044.62 1069.18L1035.75 1067.85L1025.94 1066.35"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1368.63 879.6L1373.25 879.074L1380.62 877.967"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M774.167 1007.93L769.514 1015.18L713.107 1015.48L712.941 1015.61"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M713.11 1015.48L712.867 1000.5"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M961.061 1169.84L963.027 1179.23L972.219 1188.8L994.691 1191.4"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1208.65 822.252L1217.7 832.309L1226.57 835.205L1236.46 838.595L1253.24 856.987L1261.49 866.979L1287.64 878.327L1298.23 882.838"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1051.16 893.347L1049.77 881.633L1049.29 869.128"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M974.438 849.226L981.004 848.403L984.563 847.945L984.818 844.173"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M811.254 1234.77L801.144 1247.18L800.683 1252.27"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M867.757 916.267L878.274 926.673L877.414 929.514L874.919 937.733"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M810.164 1034.81L811.211 1035.48L824.631 1044.19L830.052 1046.74L835.272 1049.21L834.982 1059.04L834.93 1060.32L837.091 1060.59"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M955.288 904.423L949.803 917.373L945.976 931.085L945.768 943.534L954.826 952.787L958.569 964.418L961.45 971.523"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M792.873 714.536L790.015 720.966L789.999 733.551L797.782 748.108L803.262 816.382L779.731 819.227L779.485 824.949L783.482 874.961L787.285 922.436L786.896 938.04L786.831 962.957L787.195 990L787.435 1007.92L787.28 1023.33L810.172 1034.81L815.06 1062.5L815.234 1063.58L816.664 1084.32L811.875 1116.93L812.369 1129.95L812.172 1140.76L811.458 1150.65L811.11 1160.73L810.988 1167.35L810.74 1175.25L809.709 1179.11L808.033 1185.37L809.186 1198.36L809.817 1212.29L809.24 1215.61L809.96 1220.09L810.051 1221.12L811.258 1234.77L814.123 1291.09"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M676.58 1112.59L674.437 1152.1L729.578 1155.93L751.033 1156.93L772.956 1159.17L789.314 1160.31L811.111 1160.73L816.659 1160.92"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M867.085 1133.84L891.176 1135.71L912.348 1119.83L931.089 1119.24"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1075.76 1123.33L1068.68 1119.8L1060.38 1116.03"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M935.014 1099.82L905.29 1095.45L892.89 1093.63L882.536 1092.11L863.512 1089.37L834.025 1084.98"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1001.38 1192.05L1001.85 1189.03L1000.3 1185.71L999.399 1182.28L999.53 1178.86L1000.57 1175.81L1002.43 1174.66L1004.11 1164.01L1000.36 1160.81L964.677 1155.68"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1298.23 882.838L1308.54 895.209"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1265.57 845.586L1253.24 856.987L1250.22 872.786"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1095.86 874.294L1095.67 824.71L1095.57 797.256L1095.57 756.533L1084.95 730.182L1065.04 715.112L1044.29 708.42L998.61 708.943L966.758 709.741L935.981 710.259L870.071 711.378L863.018 714.044L855.148 711.655L792.873 714.536L782.332 714.531L774.993 716.99L767.758 715.349L761.265 718.345L754.777 714.467L745.401 714.864L741.534 717.785L729.403 716.331L721.711 717.656L702.369 718.474L697.076 718.305L693.185 715.79L684.531 719.054L679.927 725.947L679.188 731.506L679.783 740.811L674.922 751.291L674.146 754.387L675.903 758.445L675.813 767.891L673.838 775.185L676.738 781.602L674.753 793.562L675.13 794.771L677.021 800.766L681.504 813.31L685.371 817.274L686.431 820.664L687.786 863.453"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M819.801 814.765L803.262 816.382"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1202.96 814.115L1191.68 799.676"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1096.43 884.141L1095.84 881.523L1095.86 874.295L1104.66 874.35L1110.69 874.247L1111.04 866.365L1111.27 861.223L1115.33 853.942L1115.5 850.647"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1089.1 881.4L1074.08 898.892"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1037.64 934.708L1031.55 942.22L1020.83 951.918L1019.01 954.782L993.494 982.774"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1037.64 934.708L1029.41 933.966L1020 932.68L1009.63 929.649L1000.58 926.982L991.87 922.485L988.602 920.641L985.406 917.966L984.059 914.855L985.842 911.652L988.68 909.862L995.181 906.423L999.774 904.382L1008.5 901.153L1016.65 898.975L1026.09 896.66L1034.28 895.086L1043.6 893.609L1051.16 893.347L1058.25 893.459L1063.74 894.071L1070.89 896.078L1074.08 898.891L1075.24 902.192L1074.06 907.433L1070.72 914.321L1067.47 919.101L1063.64 924.185L1060.88 926.904L1055.73 930.827L1048.87 933.391L1037.64 934.708Z"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M865.619 1167.03L852.731 1167.11L816.78 1167.37"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M956.603 1211.62L970.617 1211.25L987.53 1215.74L1038.71 1214.13L1042.77 1210.85L1045.03 1196.3L1045.52 1193.13L1047.9 1177.81L1049.07 1170.28L1055.54 1128.54L1060.37 1116.03L1075.46 1076.96L1079.5 1054.13L1084.27 1051.66L1088.33 1035.44L1093.59 1008.92L1096.85 982.212L1097.04 977.006L1097.99 914.898L1098.46 898.775L1098.31 886.676L1096.43 884.142"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1121.53 671.986L1119.05 666.012"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1338.17 888.554L1328.55 883.304L1315.22 873.382L1308.61 867.135"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1308.53 895.21L1322.82 890.212L1338.16 888.555L1351.28 888.652L1358.17 887.471"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1198.54 574.693L1199.36 600.911"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M882.533 1092.11L883.542 1083.98L884.724 1074.43L885.65 1067.1"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M892.891 1093.63L893.609 1084.62L894.356 1075.25L894.549 1072.86L894.902 1068.47L893.418 1068.27"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M884.728 1074.43L894.356 1075.25"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M905.291 1095.45L894.548 1072.86"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M964.613 1138.56L969.279 1139.07"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M676.576 1112.59L670.726 1113.12L624.339 1117.39L614.531 1120.53L607.622 1120.8"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1073 931.387L1063.64 924.185"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1084.63 967.771L1087.95 962.896L1087.54 914.764"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1019.01 954.782L1043.82 963.786L1059.48 963.984L1084.63 967.77L1097.05 977.005"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1032.41 983.082L1043.82 963.786"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M970.198 982.875L980.438 971.811"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1070.72 914.321L1087.54 914.764L1098 914.897"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M961.453 971.523L980.439 971.81L988.32 971.931L1015.13 950.666L1020.83 951.918"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M958.8 1104.61L960.726 1088.84"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M915.254 1251.03L915.715 1240.23L916.799 1214.9L919.088 1204.66L924.231 1159.5L931.089 1119.24L935.233 1119.1L937.702 1100.42L938.933 1086.16"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M717.737 1222.32L711.688 1221.8L698.707 1223.55L676.197 1223.42L658.374 1223.33L647.37 1221.53L645.533 1220.12L645.404 1202.97"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M725.182 1221.92L729.704 1223.84L736.722 1224.15L743.646 1227.54L747.108 1232.68L750.643 1232.96L757.587 1231.76L765.912 1233.31L771.478 1237.26L774.769 1241.83L777.853 1244.65L784.977 1246.65L801.144 1247.18"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M950.61 1219.44L916.799 1214.9"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M954.744 1050.4L953.398 1060.22L963.889 1061.84"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1088.34 1035.44L1094.5 1036.74L1100.52 1037.39"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1031.55 942.22L1055.35 949.183L1072.22 950.805L1073.57 938.144L1073 931.387"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1148.8 1053.6L1149.38 1050.62L1137.59 1049.97L1132.31 1036.28"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1155.44 956.742L1163.8 956.442L1163.98 956.437"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1137.07 836.987L1158.39 858.969"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1173.24 891.876L1166.4 888.736L1156.58 886.917L1146.56 886.995L1142.83 886.708"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1163.98 956.437L1159.9 948.424L1155.44 946.887L1144.84 950.247L1114.74 946.87L1112.18 943.111"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M893.613 1084.62L883.55 1083.97"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M863.061 1179.35L868.745 1185.36L880.598 1188.61"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M907.242 1201.2L919.087 1204.66L923.214 1205.87L936.422 1208.45L950.076 1210.3L956.607 1211.62"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M937.495 1252.17L915.25 1251.03L900.878 1251.66L893.841 1251.96L872.028 1249.52L862.059 1246.93"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M900.821 1259.64L900.885 1251.65"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M950.614 1219.44L955.144 1220.05L956.471 1223.43L956.896 1224.5L956.764 1234.08"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M956.463 1223.43L958.631 1223.82L962.614 1224.53L964.19 1224.81L969.805 1221.99L978.861 1222.42"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M844.636 872.929L838.011 887.768L833.513 888.313"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M867.453 888.956L871.06 878.623L876.118 870.418"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M813.453 922.09L815.133 919.054L827.359 897.106L833.571 892.435L833.998 892.062"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M783.478 874.961L774.339 883.914L754.343 886.447L741.951 881.308L737.328 869.47"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M741.951 881.308L728.257 882.827L720.825 891.078"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1115.06 799.544L1125.69 799.828L1132.23 794.007"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M866.331 1150.74L924.231 1159.5"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1163.38 1045.01L1281.1 1044.16"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1024.46 1077.7L1022.05 1094.41L1023.85 1104.05L1025.91 1107.51L1049.67 1111.49L1060.38 1116.03"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M852.723 1167.12L849.32 1174.51L843.557 1182.24L843.67 1197.74L843.999 1243.62L844.081 1255.49"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M843.678 1197.74L835.048 1197.81L826.646 1198.06L819.635 1197.82L809.187 1198.36"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M826.41 1187.45L826.645 1198.06L826.63 1221.57L827.886 1228.58L828.221 1253.5L830.061 1258.84"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M844.007 1243.62L853.5 1243.73L862.101 1243.72"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M628.444 1239.95L623.314 1240.34"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M623.111 1235.33L612.94 1234.24"
          stroke="#E3E3E3"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1323.47 663.399L1323.42 673.034"
          stroke="white"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1306.25 663.405L1323.48 663.399L1339.79 663.385"
          stroke="white"
          stroke-width="3.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1261.92 666.734L1252.79 664.845"
          stroke="#444444"
          stroke-width="0.4"
        />
        <path
          d="M1370.17 703.631L1370.31 731.594L1370.94 862.465L1341.89 862.04L1201.3 755.813L1231.71 704.842L1316.11 704.105L1328.17 703.997L1370.17 703.631Z"
          stroke="#444444"
          stroke-width="0.4"
        />
        <path
          d="M1316.11 704.106L1313.88 717.367L1316.27 739.602L1370.31 731.594"
          stroke="#444444"
          stroke-width="0.4"
        />
        <path
          d="M1247.36 663.847L1222.31 662.743"
          stroke="#444444"
          stroke-width="0.4"
        />
        <path
          d="M1301.5 870.748L1298.23 882.834L1295.8 891.855"
          stroke="#444444"
          stroke-width="0.4"
        />
        <path
          d="M750.278 1224.92L748.899 1221.39L749.793 1217.48L749.708 1214.05L753.9 1204.45L756.991 1200.13L762.927 1197.95L766.225 1197.84L769.639 1197.12L774.422 1195.67L779.377 1193.47L783.443 1190.95L787.985 1188.81L791.164 1187.96L793.939 1188.02L799.423 1189.64L801.862 1191.85L804.388 1195.4L805.538 1199.07L805.925 1204.16L804.288 1210.12L803.73 1211.91L803.817 1214.32L804.991 1217.36L806.56 1220.76L804.591 1221.76L802.84 1222.21L800.149 1222.14L792.763 1217.72"
          stroke="#444444"
          stroke-width="0.4"
        />
        <path
          d="M873.126 1009.22L874.327 1009.6L874.171 1015.5L883.365 1017.16L886.136 998.433L907.45 1001.46L904.821 1020.01L913.705 1021.25L919.183 1022.07L945.301 1025.48L945.392 1024.86L948.514 1003.3L938.414 1002.23L915.907 998.623L913.804 992.414L914.445 989.731L911.554 989.128L900.987 987.212L883.143 985L873.357 999.469L873.126 1009.22Z"
          stroke="#808080"
        />
        <path
          d="M1006.71 1124.6L1018.15 1127L1020.14 1124.59L1024.86 1129.83L1023.02 1132.21L1023.24 1140.93L1033.63 1146.06L1033.85 1144.78L1035.55 1145.58L1046.16 1119.05L1057.4 1121.02L1066.03 1104.42L1058.66 1103.73L1057.93 1108.49L1023.84 1104.05L1021.12 1103.7L1018.47 1118.11L1014.95 1122.21L1010.6 1123.49L1006.87 1123.27L1006.71 1124.6Z"
          stroke="#808080"
        />
        <path
          d="M837.094 1060.59L864.049 1064.14L868.76 1064.83L885.652 1067.1L893.417 1068.26L894.901 1068.46L938.683 1074.33L939.587 1067.14L940.358 1060.16L914.619 1056.56L921.283 1061.53L912.534 1061.57L912.823 1062.85L908.444 1063.08L908.456 1065.29L899.064 1064.51L899.278 1061.58L883.959 1061.49L884.052 1063.69L860.21 1060.82L862.202 1052.59L854.083 1051.26L853.139 1059.14L837.158 1059.21L837.094 1060.59Z"
          stroke="#808080"
        />
        <path
          d="M682.458 1101.79L689.996 1101.08L690.107 1081.68L692.405 1069.58L692.416 1066.21L692.422 1063.62L692.543 1020.76L682.435 1020.59L680.095 1020.55L684.823 1058.39L683.387 1058.96L683.57 1080.18L685.197 1080.77L685.73 1084.09L683.184 1097.87L682.458 1101.79Z"
          stroke="#808080"
        />
        <path
          d="M811.154 919.018L815.128 919.051L833.724 919.227L826.249 901.099L834.112 896.858L833.566 892.432L833.571 892.19L819.218 894.116L821.097 897.338L814.792 900.691L818.463 909.588L811.154 919.018Z"
          stroke="#808080"
        />
        <path
          d="M731.175 1154.08L747.71 1154.31L748.078 1136.34L731.632 1136.24L731.175 1154.08Z"
          stroke="#808080"
        />
        <path
          d="M746.841 1058.78L757.829 1060.75L759.786 1064.58L761.362 1064.57L761.13 1048.27L758.994 1048.28L755.473 1046.04L754.395 1047.65L751.835 1051.51L752.137 1054.69L748.687 1057.84L746.841 1058.78Z"
          stroke="#808080"
        />
        <path
          d="M1168.36 933.627L1174.01 933.694L1174.34 912.756L1169.08 912.557L1168.62 912.517L1168.36 933.627Z"
          stroke="#808080"
        />
        <path
          d="M1296.1 704.45L1297.43 708.943L1295.34 711.931L1295.54 721.596L1292.46 728.889L1288.53 734.029"
          stroke="#BBBBBB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1144.08 1147.27L1138.46 1196.55"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1125.54 1206.02L1125.02 1218.41L1124.89 1221.56L1122.38 1271.53"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1093 1205.65L1092.34 1218.31L1092.18 1221.13L1089.31 1271.53"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1000.47 1232.18L1012.79 1232.86L1025.23 1233.56L1019.73 1272.28L1017.29 1276.15L1007.37 1275.89L995.096 1275.56"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1069.5 847.111L1080.11 845.707L1083.11 868.188L1071.96 868.344"
          stroke="#BBBBBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1248.3 665.911L1241.87 673.794"
          stroke="white"
          stroke-opacity="0.4"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1261.87 642.286L1258.62 651.668L1252.71 659.829"
          stroke="white"
          stroke-opacity="0.4"
          stroke-width="2.9"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1103.42 705.073L1110.1 702.648L1123.29 702.397L1131.27 704.472L1138.96 707.352L1148.42 709.78L1156.69 713.884L1163.47 716.504L1179.23 718.557L1188.12 716.444L1204.37 716.008L1212.22 714.863"
          stroke="white"
          stroke-opacity="0.4"
          stroke-width="2.9"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1222.09 700.903L1288.46 700.512L1295.1 696.084"
          stroke="white"
          stroke-opacity="0.4"
          stroke-width="2.9"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1149.78 559.518L1151.52 562.972L1153.65 566.574L1151.28 589.829L1152.22 591.639L1154.1 593.114L1157.17 594.926L1161.26 601.145L1165.12 623.566L1160.09 632.962L1157.6 643.189L1153.65 648.206"
          stroke="white"
          stroke-opacity="0.4"
          stroke-width="2.9"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M629.856 915.558L629.8 926.277L627.269 926.427L627.468 958.277L622.804 958.351L615.117 958.65L610.558 959.898L611.768 997.706L611.151 1007.59L613.238 1018.47L611.871 1026.84L612.528 1059.98L614.739 1066.86L612.75 1076.18L611.929 1090.6L613.616 1102.66L612.206 1112.41L614.53 1120.53L618.305 1125.45L622.186 1136.39L621.126 1141.4L619.945 1188.72L616.814 1199.89L621.713 1208.29L622.408 1218.29L623.11 1235.33L623.204 1237.59L623.313 1240.33L623.648 1248.46L613.341 1257.82L613.354 1257.82"
          stroke="white"
          stroke-opacity="0.4"
          stroke-width="2.9"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1196.82 610.219L1192.83 612.06L1178.07 613.117L1174.69 615.058L1172.5 618.046L1171.81 621.734L1171.55 625.084L1165.11 623.567"
          stroke="white"
          stroke-opacity="0.4"
          stroke-width="2.9"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1222.09 700.903L1212.22 714.863L1196.61 738.547L1190.62 747.843L1189.84 764.119L1191.22 769.503L1202.32 787.788L1202.82 792.978L1191.68 799.673L1137.08 836.983L1115.5 850.643"
          stroke="white"
          stroke-opacity="0.4"
          stroke-width="2.9"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1103.42 705.073L1097.61 665.425L1097.93 657.339L1098 653.592"
          stroke="white"
          stroke-opacity="0.4"
          stroke-width="2.9"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1204.83 646.168L1207.31 642.628L1213.08 637.572L1213.79 630.828L1215.39 626.28L1217.9 621.794L1221.73 618.673L1226.11 616.778L1229.46 615.17L1231.7 611.707L1231.99 608.432"
          stroke="white"
          stroke-opacity="0.4"
          stroke-width="2.9"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1252.71 659.828L1241.17 659.299L1217.66 658.221L1215.04 656.771L1212.23 654.074L1206.26 647.129L1204.83 646.168L1200.47 644.406L1197.81 644.215L1192.81 643.853L1183.57 644.748L1176.99 645.378L1169.4 646.473L1156.72 648.305L1153.64 648.206L1140.65 645.692L1136.36 644.863L1134.49 644.812L1130.47 644.703L1127.71 645.234L1117.11 647.281L1106.84 651.14L1100.6 652.482L1098 653.592L1087.61 655.553L1084.5 655.532"
          stroke="white"
          stroke-opacity="0.4"
          stroke-width="2.9"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M900.42 1292.75L900.816 1259.63"
          stroke="white"
          stroke-opacity="0.4"
          stroke-width="2.9"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1296.1 704.45L1297.43 708.943L1295.34 711.931L1295.54 721.596L1292.46 728.889L1288.53 734.029"
          stroke="#EAEAEA"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="6 8"
        />
        <path
          d="M1246.82 1157.69L1263.31 1130.72L1279.94 1080.98"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1202.96 814.112L1217.63 812.56L1237.02 818.391L1257.25 825.089L1266.58 825.226L1274.95 828.654"
          stroke="white"
          stroke-width="2.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M827.794 871.465L825.135 851.743"
          stroke="white"
          stroke-width="2.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M645.432 820.556L644.947 775.826L645.112 746.217L631.165 746.166L631.261 775.821L631.351 816.531"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M631.257 775.822L644.943 775.827L654.449 775.745L658.51 775.606L658.575 815.639"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M645.112 746.217L657.866 746.206L657.756 762.975L654.229 764.813L654.453 775.744"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M622.429 904.765L631.973 904.594L645.263 904.576L647.028 904.624L658.785 904.932L658.63 866.06"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M645.26 904.576L645.306 866.092"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M668.335 866.773L681.221 865.463L680.974 834.899"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1295.83 652.023L1295.34 659.385L1295.4 675.285L1294.92 687.318L1295.1 696.085L1327.82 696.18L1344.17 696.222"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1294.92 687.318L1319.84 688.025"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1258.01 633.063L1298.69 633.525"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1258.11 576.897L1267.15 579.731L1267.02 610.613L1263.98 614.718L1257.79 615.287"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1337.57 553.181L1330.21 560.53L1292.27 561.073"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1337.56 581.884L1337.6 570.561L1359.39 571.225"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1337.56 581.884L1344.52 581.824L1359.57 581.867"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1344.51 581.825L1344.67 590.065L1343.23 593.078L1337.42 595.033"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1104.65 955.618L1112.03 955.5L1120.55 955.655L1132.49 957.211L1140.45 958.253L1154.94 960.294L1155.44 956.738"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1104.82 887.41L1111.47 887.704L1117.46 886.909L1122.53 884.982L1129.6 881.315L1132.26 879.931L1140.86 879.655L1153.11 879.646L1158.3 878.728L1164.11 877.705L1170.18 875.533L1182.66 863.254L1188.84 858.437L1194.02 854.862"
          stroke="white"
          stroke-width="2.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1377.51 626.22L1371.57 626.301L1364.66 626.401L1364.55 618.554"
          stroke="white"
          stroke-width="2.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1364.66 626.401L1364.69 641.652"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1166.8 560.216L1219.76 560.252L1252.23 560.415"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1166.55 571.609L1219.9 571.394L1252.31 571.2"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M670.681 1109.05L667.356 1108.72L659.452 1108.92L656.142 1108.64L646.851 1108.69L646.645 1084.69L659.512 1084.74L670.229 1084.73L670.681 1109.05Z"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M659.448 1108.93L659.508 1084.74"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M721.015 1225.33L732.819 1225.34L732.208 1248.02L733.776 1256.14L736.231 1268.37"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M733.772 1256.14L721.315 1256.06"
          stroke="white"
          stroke-width="2.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1039.15 1025.81L1067.12 1030.9"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1030.93 1046.65L1029.95 1056.82L1063.91 1062.17L1067.46 1062.69L1075.08 1063.88"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1063.91 1062.17L1065.46 1052"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1067.12 1030.9L1064.9 1042.47L1037.07 1037.7L1039.15 1025.81"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1153.35 1157.34L1159.53 1161L1169.92 1167.15L1184.38 1172.24L1198.45 1172.53L1215.78 1171.35L1228.03 1168.79L1239.44 1163.63L1246.82 1157.69"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1101.21 1141.19L1093.6 1196.19"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1112.14 1142.74L1104.66 1196.28"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1122.63 1144.23L1115.54 1196.36"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1133.61 1145.79L1126.46 1196.45"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1078.71 1143.25L1071.05 1196.01L1082.85 1196.1L1093.6 1196.18L1104.66 1196.28L1115.55 1196.36L1126.47 1196.45L1138.45 1196.55L1150.46 1196.72"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1089.79 1144.96L1082.85 1196.1"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1114.29 1205.8L1113.64 1218.39L1113.48 1221.4L1111.15 1271.53"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1135.91 1205.98L1135.52 1218.54L1135.43 1221.68L1132.77 1271.53"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1070.4 1220.85L1070.69 1216.18L1071.36 1205.82"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1103.15 1205.8L1102.75 1218.38L1102.66 1221.27L1100.13 1271.53"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1082.18 1205.44L1081.32 1218.18L1081.12 1220.99L1080.64 1229.7L1078.28 1271.53"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1080.64 1229.7L1070.1 1229.66L1065.92 1271.31L1078.28 1271.53L1089.32 1271.53L1100.14 1271.52L1111.15 1271.53L1122.38 1271.53L1132.77 1271.53L1146.46 1271.52L1241.64 1270.28"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1012.79 1232.86L1007.37 1275.89"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1051.14 1178.28L1047.91 1177.8L1025.86 1174.54"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1025.67 1185.54L1025.86 1174.54"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1001.88 1220.78L1000.47 1232.18L998.878 1245.03"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M962.797 810.716L969.501 809.597"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M964.487 823.876L976.85 822.048"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1278.79 1272.47L1288.31 1273.07L1288.36 1221.11"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1025.46 737.16L1025.8 745.885L1021.5 745.936L998.56 746.186L998.155 737.325L998.902 734.57L998.894 716.549"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M998.895 716.549L1024.68 717.246L1025.46 737.16"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1025.47 737.159L1050.6 737.218L1049.89 717.014L1024.68 717.245"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1050.59 737.219L1075.02 737.371"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1102.68 755.472L1095.57 756.529L1087.68 756.552L1021.61 756.763L1021.5 745.936"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M967.027 719.292L981.385 720.815"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M998.469 705.991L998.608 708.94L998.895 716.549"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M863.058 730.465L868.264 730.711L876.904 731.121L877.008 738.899"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M935.85 707.051L935.978 710.255L935.995 720.591"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M932.707 720.574L932.786 725.713L932.857 730.481L904.908 730.409"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1202.48 1248.99L1202.38 1236.65"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1214.73 1249.19L1214.6 1236.55"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1227.18 1249.39L1227.21 1236.73"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1241.63 1270.28L1241.27 1260.15L1241.19 1249.62L1240.9 1236.66"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1147.72 1248.12L1182.62 1248.68L1192.53 1248.84L1202.47 1248.99L1214.73 1249.19L1227.18 1249.39L1241.19 1249.62"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1147.15 1258.73L1241.27 1260.15"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1223.89 506.664L1223.77 480.492"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1110.23 572.469L1105.14 612.391L1090.93 613.666L1087.85 613.505"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1292.4 651.696L1288.55 659.128L1286.78 672.422L1284.49 674.575L1280.84 675.677L1266.15 674.722L1264.57 677.61L1264.45 680.008"
          stroke="white"
          stroke-width="2.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1295.1 696.085L1296.1 704.45"
          stroke="white"
          stroke-width="2.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M648.53 1218.14L648.304 1206.59L647.992 1194.67L647.979 1182.79L647.766 1172.95L648.271 1169.28L647.724 1164.14"
          stroke="white"
          stroke-width="2.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M721.366 1267.56L718.617 1267.54L714.78 1267.5L644.938 1266.87"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M637.735 1171.2L637.86 1195.58L633.065 1190.44L628.961 1191.59L630.009 1172.27L637.735 1171.2Z"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1025.86 1174.54L1026.4 1167.32L1049.07 1170.28L1052.28 1170.7"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1192.53 1248.84L1192.57 1236.46"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1182.62 1248.68L1182.74 1236.69"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1197.53 851.919L1200.41 849.718L1203.29 849.216L1206.75 852.141L1211.19 857.997L1215.63 864.4L1217.8 868.455L1217.85 871.636L1215.77 875.503L1212.24 877.559L1207.66 876.635L1203.27 873.851L1196.3 864.54L1193.9 860.159L1194.01 854.863L1197.53 851.919Z"
          stroke="white"
          stroke-width="2.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1067.46 1062.69L1066.53 1071.63L1066.23 1074.51"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1088.89 499.057L1097.18 500.093L1104.69 504.502L1107.41 507.63L1108.75 507.921L1110.58 508.311L1115.92 508.223L1122.59 508.119L1133.98 507.943L1135.63 505.467L1135.32 490.897"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1122.02 491.677L1122.59 508.119"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1108.58 491.631L1108.76 507.919"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M631.946 866.275L631.969 904.594"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M764.343 981.998L698.521 982.256"
          stroke="white"
          stroke-width="2.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M904.909 730.409L904.839 725.799L932.786 725.713"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M932.717 720.573L936 720.59L936.008 723.521L948.811 723.593"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1327.82 696.179L1328.17 703.997L1329.33 706.726L1335.19 711.39L1338.58 714.677L1340.47 728.973"
          stroke="white"
          stroke-width="2.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1068.23 836.24L1068.63 839.634L1069.5 847.111L1071.97 868.344L1059.6 868.775L1049.29 869.124"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1104.18 827.305L1094.14 827.156L1085.29 830.116L1080.91 834.105L1068.24 836.239"
          stroke="white"
          stroke-width="2.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1067.72 832.975L1079.55 832.259L1083.54 828.565L1093.33 824.948L1095.67 824.707L1104.16 824.611"
          stroke="white"
          stroke-width="2.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1080.9 834.106L1075.48 837.677L1070.96 838.97L1068.63 839.635"
          stroke="white"
          stroke-width="2.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1064.9 1042.47L1067.27 1049.14L1070.48 1052.74"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1257.42 544.612L1258.11 576.897L1258.01 589.155L1257.79 615.287L1257.89 622.935L1258.01 633.063L1259.72 640.437L1261.88 642.286L1281.3 648.181L1292.4 651.696L1295.83 652.022L1312.05 646.856L1316.93 646.866L1354.06 646.94L1367.41 646.952"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1074.49 1029.55L1071.09 1049.73L1070.49 1052.74"
          stroke="white"
          stroke-width="2.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M647.996 1194.67L637.864 1195.58"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M626.717 1124.23L626.898 1141.5L630.893 1157.4L636.476 1160.67L647.728 1164.14L672.555 1163.6L729.17 1163.73L737.483 1162.48L742.375 1162.07"
          stroke="white"
          stroke-width="2.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M742.367 1162.07L770.14 1162.4L780.156 1163.35L793.708 1165.69"
          stroke="white"
          stroke-width="2.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M668.438 914.955L668.802 924.226L668.411 952.281L668.508 967.66L682.787 967.661L683.293 976.925L685.378 1017.22L688.116 1056.75L688 1097.23L688.31 1118.93L729.762 1120.2L729.573 1155.93L729.166 1163.73"
          stroke="#DDDDE8"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M830.376 1301.07L824.352 1291.18L824.713 1281.13L823.274 1266.16L822.078 1253.5"
          stroke="#EAEAEA"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="6 6"
        />
        <path
          d="M1367.41 646.951L1363.93 663.67L1359.04 664.963"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M835.818 1280.16L838.157 1286.53L840.523 1291.77L845.023 1297.06L849.579 1299.63L858.07 1301.67"
          stroke="#EAEAEA"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="6 6"
        />
        <path
          d="M835.814 1280.16L833.77 1291.63L830.377 1301.07"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M822.078 1253.5L822.069 1210.78L821.442 1204.21L819.63 1197.82L815.825 1187.03L814.346 1180.35L814.696 1177.6L816.185 1175.21L818.976 1173.92L822.036 1173.45L834.553 1173.5"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M834.557 1173.5L835.047 1197.81L836.235 1267.51"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M834.55 1173.5L845.664 1173.82L849.319 1174.5L851.935 1176.67L852.66 1180.85L853.166 1186.41L853.492 1243.73L853.599 1264.8L850.09 1269.15L847.169 1270.74L843.73 1271.5"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M834.55 1173.5L845.664 1173.82L849.319 1174.5L851.935 1176.67L852.66 1180.85L853.166 1186.41L853.492 1243.73L853.599 1264.8L850.09 1269.15L847.169 1270.74L843.73 1271.5"
          stroke="#EAEAEA"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="6 6"
        />
        <path
          d="M836.231 1267.51L836.419 1278.19"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M843.734 1271.5L836.419 1278.19"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M843.734 1271.5L836.419 1278.19"
          stroke="#EAEAEA"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="6 6"
        />
        <path
          d="M961.448 971.519L962.166 965.113L955.462 945.112L955.933 920.039L964.354 903.724L977.236 891.87L982.325 888.586L990.639 884.779"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M626.713 1124.23L624.338 1117.38L623.67 1043.66L623.617 1021.72L623.084 980.177L622.804 958.351L622.618 939.203L622.389 915.651L622.451 909.695L622.425 904.765L622.431 840.882L622.27 821.391"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M862.733 753.624L864.94 758.974L868.472 762.73L875.153 766.754L881.941 768.388L888.839 767.27L910.909 764.399L938.81 768.747L955.315 772.133L960.735 777.809"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M670.681 1109.05L670.725 1113.11L672.551 1163.6"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1093.31 553.749L1092.52 558.592L1088.96 600.464L1087.85 613.505L1087.12 622.636L1084.49 655.533L1084.9 681.564"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1057.37 1230.57L1052.37 1256.55L1046.52 1290.65L1039.52 1303.95"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1149.14 1221.75L1148.22 1238.88L1147.72 1248.12L1147.15 1258.73L1146.46 1271.52L1147.67 1290.11"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1061.04 674.804L1071.31 657.567L1079.04 635.323L1082.64 599.905L1084.31 583.55L1087.47 559.084L1086.07 552.915"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M622.393 915.651L629.859 915.557L643.59 915.444L646.503 915.426L662.113 915.09L668.441 914.954"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M631.373 735.34L626.759 731.231L624.503 727.215L623.606 725.626L624.618 718.488L627.728 711.609L632.086 708.867L636.019 706.877L639.843 705.834L646.363 704.872L655.562 707.894L659.708 712.247L664.857 718.133L667.139 725.671L665.327 727.739L662.357 731.117L657.128 734.763L652.21 737.763L645.91 739.034L638.846 738.212L631.373 735.34Z"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M665.331 727.738L669.012 742.034L667.801 794.886L667.737 797.757L667.658 801.248L667.868 815.244L663.21 820.076"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1088.44 693.71L1087.28 699.548L1084.99 703.995L1080.33 708.758L1074.9 711.518L1067.27 712.419L1060.65 710.695L1055.67 707.424L1051.09 701.304L1049.19 693.433L1051.37 683.818L1055.07 678.804L1061.04 674.805L1070.4 673.259L1079.68 676.466L1084.91 681.563L1087.68 687.325L1088.44 693.71Z"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1102.29 749.157L1087.83 726.913L1081.51 722.577L1067.27 712.418"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1088.44 693.711L1094.01 711.552L1100.3 731.027L1102.28 749.158"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M862.733 753.624L863.076 738.178L863.058 730.465L863.018 714.04L862.761 708.218L862.446 702.057"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1102.28 749.157L1102.67 755.472L1103.75 773.063"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1057.53 1215.69L1059.65 1218.4L1060.82 1223.08L1060.21 1226.47L1059.33 1228.28L1057.37 1230.57L1054.41 1232.33L1049.37 1232.84L1046.12 1231.72L1043.12 1229.17L1041.28 1225.35L1041.35 1220.5L1042.91 1217.23L1045.79 1214.59L1048.99 1213.35L1051.73 1213.19L1055.05 1214.06L1057.53 1215.69Z"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1045.79 1214.59L1048.8 1193.95L1051.14 1178.28L1051.62 1175.08L1052.27 1170.7L1055.26 1150.6L1061.88 1137.29"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M622.274 821.39L622.517 748.923L622.279 739.015L624.507 727.214"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1062.9 1134.25L1073.32 1137.23L1101.21 1141.19L1112.15 1142.74L1122.64 1144.23L1133.62 1145.79L1144.08 1147.27L1151.6 1152.27L1153.35 1157.34"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1153.35 1157.34L1151.32 1185.59"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1153.35 1157.34L1156.1 1150.9L1157.24 1148.21L1151.55 1132.55L1150.46 1110.97L1151.01 1101.69L1154.29 1078.93L1157.25 1055.4"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1090.07 1056.24L1079.51 1054.12L1070.49 1052.74L1065.46 1052L1030.93 1046.65L1028.53 1046.31"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M742.367 1162.07L743.989 1176.25L746.325 1217.05L748.896 1221.39L762.351 1219.4L769.942 1222.21L774.709 1226.46L777.68 1227.79L786.433 1225.39L796.788 1225.25L799.243 1229.95L796.78 1235.79L790.415 1238.28L782.39 1235.45L777.68 1227.79"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M929.754 838.866L949.487 836.422L979.096 832.749"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M825.127 851.744L877.782 845.264L883.633 844.548L924.156 839.561L929.75 838.867"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1055.66 707.425L1041.43 705.477L998.463 705.991L981.807 706.318L966.669 706.562L935.844 707.052L862.753 708.219L831.377 709.269L792.963 709.932L771.622 710.304L702.664 711.486L697.089 711.581L689.595 712.023L678.025 715.163L667.135 725.671"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1151.91 546.466L1152 556.19L1149.77 559.519L1144.6 562.262L1116.19 568.54L1110.23 572.469"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M613.51 910.018L622.447 909.695"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1178.19 545.932L1177.86 522.18L1223.97 521.05"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1219.91 571.393L1219.76 560.251L1219.57 545.263"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1337.77 543.848L1337.57 553.181L1337.6 570.561"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1008.49 1304.09L1028.81 1290.03L1039.09 1279.36"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M698.97 967.466L698.433 977.531L683.293 976.925"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M698.429 977.531L698.517 982.257L698.73 993.883L707.752 993.812"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M667.782 820.658L667.328 823.758L667.915 832.051L668.335 866.773L668.437 914.955"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M667.915 832.051L676.391 828.199L686.426 820.661"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M646.363 704.872L668.563 705.461L685.105 704.971L696.91 705.109L702.58 704.991L771.47 703.61L793.009 703.36L831.295 702.908L862.442 702.058L935.761 701.202L966.525 700.749L981.895 700.519L1014.76 699.526L1030.05 695.297L1041.62 692.094L1051.37 683.818"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M970.07 1219.38L974.41 1219.58L1001.88 1220.78L1009.97 1220.73L1041.35 1220.5"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M827.893 1090.61L825.045 1108.84L820.926 1118.18L817.347 1132.25L816.658 1160.91L816.779 1167.37"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M720.315 1304.12L720.996 1294.4L721.37 1267.56L721.319 1256.06L721.015 1225.33L720.952 1221.79L719.433 1218.38"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1125.04 1304.91L1138.82 1300.39L1143.65 1296.92L1145.05 1294.55L1147.68 1290.11"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1147.67 1290.11L1148.63 1294.41L1149.31 1297.45L1153.59 1304.68"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1061.69 1176.8L1051.62 1175.07"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M940.296 812.465L939.23 805.325L963.826 801.794"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1241.63 1270.28L1267.82 1271.78L1275.32 1272.25L1278.79 1272.47"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1267.82 1271.78L1267.37 1286.06L1267.36 1295.06L1267.34 1304.76"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M966.524 700.75L966.672 706.562L966.751 709.738L967.027 719.292"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M981.393 720.814L984.186 754.03"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M706.551 923.195L706.278 900.43"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1240.9 1236.66L1240.81 1189.15"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1223.77 480.492L1226.22 478.056L1226.16 459.534"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1224.74 545.155L1223.97 521.05L1223.89 506.664"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1105.15 612.391L1131.28 609.166L1133.44 624.162"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M702.58 704.992L702.668 711.486L702.364 718.471L702.364 724.247"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1041.39 1250.68L1040.2 1234.42L1037.78 1229.41L1033.61 1226.21L1021.66 1223.14L1009.97 1220.73"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1052.37 1256.54L1053.86 1293.29L1057.73 1299.79L1064.86 1304.01"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M606.531 714.771L627.728 711.609"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M685.382 1017.22L681.628 1017.66L672.071 1019.03L623.621 1021.72"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M819.793 814.762L836.707 812.626L836.562 777.796L836.974 768.578L840.264 761.806L849.34 760.111L862.726 753.625"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1103.75 773.063L1104.16 824.611L1104.18 827.306L1104.26 837.33L1104.66 874.346L1104.86 881.368L1104.81 887.41L1104.78 899.296L1104.73 920.084L1104.65 955.618L1104.57 982.049L1094.5 1036.74L1090.07 1056.24L1087.9 1067.55L1082.51 1089.08L1068.68 1119.79L1062.9 1134.25L1061.88 1137.29"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M719.433 1218.38L694.618 1218.48L675.882 1218.34L648.53 1218.14"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1039.52 1303.95L1037.54 1290.32L1039.09 1279.36L1041.39 1250.68L1043.12 1229.17"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M623.606 725.626L616.767 719.815L606.531 714.771"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M779.73 819.223L775.454 819.718L763.271 821.14L734.267 821.052L723.99 821.06L686.429 820.66L675.081 821.098L667.786 820.657L663.21 820.076L645.435 820.555L622.273 821.39"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M667.797 794.887L675.125 794.768L684.564 794.614"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M825.127 851.744L819.793 814.762"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M721.357 922.704L720.824 891.074"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M990.637 884.78L1006.99 881.99L1022.26 881.741L1049.77 881.63L1089.1 881.396L1095.83 881.52L1104.86 881.369"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M960.737 777.808L963.077 790.777L963.829 801.794L969.505 809.596L976.168 818.767L976.858 822.047L979.102 832.748L981.004 848.399L984.086 873.774L990.645 884.778"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M682.783 967.661L691.664 967.629L698.966 967.467L708.535 967.406"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1151.32 1185.59L1150.46 1196.72L1149.14 1221.75"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1060.81 1223.08L1070.4 1220.85L1081.12 1220.99L1092.18 1221.13L1102.66 1221.27L1113.48 1221.41L1124.88 1221.56L1135.43 1221.68L1141.59 1221.71L1149.14 1221.75"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M970.074 1219.38L966.507 1220.82L963.395 1222.65L962.617 1224.53L961.739 1226.62L961.654 1231.6"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M959.107 1231.41L958.808 1226.8L958.634 1223.82L958.806 1222.65"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M963.391 1222.65L961.344 1223.28L958.802 1222.65L958.03 1221.07L958.135 1218.02L960.51 1216.23L963.635 1216.32L967.751 1217.07L971.685 1217.61L974.41 1219.58"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1067.72 832.975L1055.01 833.846L1044.55 834.865"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1055.01 833.846L1059.6 868.775"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1044.55 834.865L1049.29 869.124"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1061.89 1137.29L1064.47 1151.75L1061.69 1176.8L1059.68 1195L1057.53 1215.69"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M843.738 1271.5L839.366 1270.72L836.235 1267.51"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M822.079 1253.5L827.133 1259.73L832.032 1263.89L836.231 1267.51"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1089.25 529.176L1091.81 538.243L1093.86 543.797"
          stroke="white"
          stroke-width="8.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1085.02 545.531L1087.65 537.251L1089.25 529.176"
          stroke="white"
          stroke-width="8.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1110.43 547.017L1093.76 553.396"
          stroke="white"
          stroke-width="8.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1095.35 545.445L1110.44 547.016"
          stroke="white"
          stroke-width="8.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1385.73 543.48L1377.72 543.555L1369.91 543.62L1337.77 543.848L1308.64 543.93L1292.99 544.142L1257.42 544.612L1224.74 545.156L1219.57 545.264L1178.19 545.933L1151.92 546.465L1110.44 547.017"
          stroke="white"
          stroke-width="8.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1093.86 543.797L1095.34 545.446L1096.09 547.39L1096.21 548.534L1095.86 550.593L1094.82 552.399L1093.76 553.396L1093.31 553.749L1091.89 554.325L1089.82 554.552L1087.79 554.059L1086.07 552.917L1084.74 551.424L1084.27 549.468L1084.32 547.382L1084.51 546.361L1085.02 545.532L1086.37 543.942L1088.18 542.903L1090.24 542.556L1092.29 542.922L1093.86 543.797Z"
          stroke="white"
          stroke-width="8.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1119.84 687.894L1121.52 671.983"
          stroke="white"
          stroke-width="3.3"
          stroke-linejoin="round"
        />
        <path
          d="M1372.06 798.691L1368.06 806.389L1360.38 808.539L1351.67 810.993L1345.39 814.777L1339.44 820.186L1336.12 827.432L1331.96 833.006L1323 838.594L1315.8 839.635L1304.22 836.059L1297.8 829.42L1267.92 801.195L1245.87 804.313"
          stroke="white"
          stroke-width="3.3"
          stroke-linejoin="round"
        />
        <path
          d="M960.725 1088.84L962.633 1072.15"
          stroke="white"
          stroke-width="3.3"
          stroke-linejoin="round"
        />
        <path
          d="M1148.22 1238.88L1188.96 1238.14L1193.33 1237.78L1195.58 1234.87L1195.68 1232.19"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M761.002 1135.81L761.983 1130.4"
          stroke="white"
          stroke-width="3.3"
          stroke-linejoin="round"
        />
        <path
          d="M940.522 1069.46L938.928 1086.16"
          stroke="white"
          stroke-width="3.3"
          stroke-linejoin="round"
        />
        <path
          d="M1144.08 1147.27L1138.46 1196.55"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1125.54 1206.02L1125.02 1218.41L1124.89 1221.56L1122.38 1271.53"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1093 1205.65L1092.34 1218.31L1092.18 1221.13L1089.31 1271.53"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1000.47 1232.18L1012.79 1232.86L1025.23 1233.56L1019.73 1272.28L1017.29 1276.15L1007.37 1275.89L995.096 1275.56"
          stroke="white"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1084.74 551.424L1065.67 547.765"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1065.67 547.765L1084.51 546.361"
          stroke="white"
          stroke-width="4.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M873.084 1009.2L874.285 1009.59L874.129 1015.48L883.323 1017.14L886.094 998.416L907.408 1001.45L904.779 1019.99L913.663 1021.23L919.141 1022.06L945.259 1025.46L945.35 1024.84L948.472 1003.28L938.372 1002.21L915.865 998.606L913.762 992.396L914.403 989.714L911.512 989.111L900.945 987.195L883.101 984.983L873.315 999.452L873.084 1009.2Z"
          fill="#DDDDE8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1006.67 1124.58L1018.11 1126.99L1020.1 1124.58L1024.81 1129.81L1022.98 1132.2L1023.2 1140.91L1033.59 1146.05L1033.8 1144.77L1035.51 1145.57L1046.11 1119.03L1057.36 1121.01L1065.99 1104.4L1058.62 1103.72L1057.89 1108.47L1023.8 1104.03L1021.08 1103.69L1018.42 1118.09L1014.91 1122.19L1010.56 1123.47L1006.82 1123.25L1006.67 1124.58Z"
          fill="#DDDDE8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M837.053 1060.57L864.008 1064.13L868.719 1064.81L885.611 1067.08L893.375 1068.25L894.859 1068.44L938.641 1074.32L939.545 1067.12L940.316 1060.14L914.578 1056.54L921.241 1061.51L912.492 1061.55L912.781 1062.83L908.403 1063.06L908.414 1065.27L899.023 1064.49L899.236 1061.57L883.918 1061.48L884.01 1063.67L860.169 1060.8L862.16 1052.57L854.042 1051.25L853.098 1059.13L837.116 1059.19L837.053 1060.57Z"
          fill="#DDDDE8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M682.417 1101.77L689.955 1101.07L690.066 1081.67L692.364 1069.57L692.376 1066.2L692.381 1063.61L692.503 1020.74L682.395 1020.58L680.054 1020.54L684.783 1058.38L683.347 1058.95L683.529 1080.17L685.156 1080.76L685.689 1084.07L683.143 1097.85L682.417 1101.77Z"
          fill="#DDDDE8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M811.114 919.004L815.087 919.038L833.684 919.214L826.208 901.085L834.072 896.845L833.526 892.418L833.53 892.176L819.177 894.102L821.057 897.325L814.752 900.678L818.423 909.575L811.114 919.004Z"
          fill="#DDDDE8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M731.133 1154.07L747.668 1154.29L748.036 1136.32L731.59 1136.23L731.133 1154.07Z"
          fill="#DDDDE8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M913.642 967.632L915.481 970.035L924.359 970.818L925.973 971.064L928.681 951.455L927.303 951.598L925.939 953.174L913.642 967.632Z"
          fill="#DDDDE8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M746.8 1058.77L757.788 1060.74L759.745 1064.57L761.322 1064.55L761.089 1048.26L758.954 1048.27L755.432 1046.03L754.354 1047.64L751.794 1051.5L752.097 1054.68L748.646 1057.82L746.8 1058.77Z"
          fill="#DDDDE8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1168.32 933.61L1173.97 933.677L1174.3 912.738L1169.04 912.54L1168.58 912.5L1168.32 933.61Z"
          fill="#DDDDE8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M684.425 805.421L687.537 805.411L687.545 808.116L734.3 807.896L781.789 807.723L781.466 723.968L702.326 724.229L687.218 724.216L687.216 726.934L684.12 726.942L684.425 805.421Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1064.8 1199.63L1147.1 1198.01L1151.36 1157.48L1148.7 1152.55L1143.73 1149.69L1072.55 1140.58L1064.8 1199.63Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1060.78 1276.53L1137.49 1276.17L1140.54 1224.43L1082.89 1223.92L1082.8 1227.18L1067.13 1227.22L1060.78 1276.53Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1151.83 1276.73L1244.63 1275.14L1243.59 1235.18L1198.92 1234.98L1199.13 1242.6L1152.47 1242.7L1151.83 1276.73Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M625.737 817.387L665.201 815.819L664.008 745.027L627.165 744.832L625.737 817.387Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1042.77 874.356L1088.75 873.512L1084.66 840.449L1078.4 841.045L1076.51 830.358L1037.95 832.806L1042.77 874.356Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1166.15 574.09L1253.38 573.307L1253.21 554.849L1165.98 555.628L1166.15 574.09Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M625.461 906.287L665.297 905.957L664.964 865.709L625.124 866.04L625.461 906.287Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M991.714 1279.08L1018.81 1279.52L1027.09 1266.76L1031.52 1233.4L1028.16 1232.86L1028.62 1228.97L1016.62 1228.73L1016.36 1227.14L1007.09 1227L1007.07 1230.26L996.035 1229.32L993.14 1246.66L1005.6 1246.67L1002.64 1269.56L992.898 1269.77L991.714 1279.08Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1029.93 1042.43L1079.45 1049.86L1083.34 1029.36L1033.46 1020.69L1029.93 1042.43Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1069.1 1213.03L1076.28 1216.48L1141.99 1216.95L1142.1 1201.8L1068.91 1202.35L1069.1 1213.03Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M621.935 1193.71L630.555 1193.62L631.931 1201.95L645.014 1201.77L644.489 1154.8L622.735 1154.3L621.935 1193.71Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1282.45 1276.1L1294.64 1276.01L1294.26 1221.92L1282.07 1222.01L1282.45 1276.1Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M639.977 1111.84L645.527 1111.93L645.574 1108.56L656.101 1108.63L667.315 1108.71L667.368 1084.21L644.709 1084.21L644.836 1096.6L640.257 1096.66L639.977 1111.84Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M644.998 1274.17L710.174 1275.58L710.044 1265.87L645.019 1264.81L644.998 1274.17Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1098.11 610.282L1112.74 609.285L1116.34 578.778L1119.67 575.18L1112.14 565.346L1104.6 570.294L1102.79 573.826L1098.11 610.282Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1296.86 701.919L1347.08 701.709L1347.06 695.011L1315.95 695.142L1315.89 682.004L1296.78 682.086L1296.86 701.919Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1288.47 567.662L1330.68 567.49L1330.62 553.865L1288.42 554.037L1288.47 567.662Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1102.62 499.198L1110.75 505.371L1132.94 504.858L1137.38 506.019L1141.3 506.069L1140.87 490.119L1102.8 490.654L1102.62 499.198Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M728.194 1274.26L743.287 1265.23L737.84 1249.87L738.92 1229.12L725.805 1230.04L727.109 1258.23L728.194 1274.26Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1031.28 1062.11L1075.43 1069.16L1076.95 1057.52L1032.99 1051.08L1031.28 1062.11Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M673.798 866.634L686.566 866.193L686.611 863.448L685.624 830.768L673.698 831.057L673.798 866.634Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1338.95 593.549L1360.84 583.119L1361.11 568.685L1339.14 568.276L1338.95 593.549Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1261.23 611.267L1273.47 611.075L1272.92 575.946L1260.68 576.139L1261.23 611.267Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1019.57 1182.25L1027.88 1190.6L1029.9 1174.04L1047.16 1176.2L1048.56 1166.36L1019.88 1161.97L1019.12 1176.29L1019.57 1182.25Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1262.67 639.384L1300.27 639.303L1300.24 628.202L1262.65 628.286L1262.67 639.384Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M903.092 734.507L934.426 734.422L934.181 719.158L926.37 719.224L926.169 723.042L903.29 723.445L903.092 734.507Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1115.92 954.208L1157.53 958.65L1158.63 949.634L1152.73 948.883L1152.26 953.385L1116.44 948.942L1115.92 954.208Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M783.971 800.309L792.68 800.261L792.559 779.671L783.85 779.715L783.971 800.309Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M948.211 942.092L953.571 943.687L952.581 933.306L954.198 920.638L958.579 908.792L955.844 905.493L950.486 918.173L947.51 931.91L948.211 942.092Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1358.69 641.019L1362.7 641.042L1362.82 618.792L1358.81 618.768L1358.69 641.019Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M979.14 876.078L982.106 875.921L979.092 850.922L975.999 851.25L979.14 876.078Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M902.472 1264.93L903.379 1268.97L906.252 1268.38L906.999 1267.81L907.858 1256.33L902.42 1257.4L902.299 1261.86L902.472 1264.93Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1304.25 1235.89L1308.72 1235.78L1308.66 1232.99L1304.18 1233.1L1304.25 1235.89Z"
          fill="#EEEEEE"
          stroke="#A07070"
          stroke-width="0.3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M986.649 839.296L987.496 839.176L992.015 871.311L1002.83 869.796L1003.63 875.5L1025.51 872.548L1019.54 830.004L1018.33 830.174L1017.48 824.138L1018.22 824.036L1015.26 803.021L1015.97 802.922L1014.54 792.809L1011.05 793.299L1011.38 795.593L1009.69 795.834L1009.39 793.698L992.463 796.066L993.547 803.781L991.457 804.069L990.984 800.814L982.279 802.037L986.01 828.562L986.957 828.426L987.785 834.31L985.981 834.557L986.649 839.296Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M689.152 862.47L775.284 861.455L774.956 833.828L688.827 834.834L689.152 862.47Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M911.721 906.529L954.297 901.164L954.391 901.897L958.443 901.387L957.799 896.375L966.456 895.295L965.911 891.05L957.037 889.111L956.72 886.424L977.902 883.739L973.552 849.527L943.7 853.318L947.87 886.064L945.252 885.844L945.058 887.664L918.552 891.047L916.934 878.315L913.348 878.797L913.076 876.621L921.247 877.387L921.423 875.479L922.836 875.58L923.161 872.042L921.754 871.909L921.929 869.993L911.858 869.05L911.348 874.707L907.751 875.167L911.721 906.529Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M627.664 969.936L634.361 969.879L634.729 1008.95L656.561 1008.74L655.815 929.224L633.775 929.431L634.065 960.443L627.578 960.502L627.664 969.936Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M695.945 1081.35L719.893 1081.12L719.978 1091.56L734.699 1091.03L734.419 1081.21L721.084 1081.59L720.808 1075.57L736.585 1075.36L736.779 1090.39L763.948 1090.04L763.745 1074.96L777.671 1074.79L777.839 1088.17L791.524 1088L791.237 1065.56L695.753 1066.81L695.945 1081.35Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M652.935 1209.76L660.408 1214.24L660.991 1213.26L667.518 1213.15L667.561 1216.07L675.693 1215.94L681.735 1215.84L681.731 1215.37L685.125 1215.32L685.162 1217.47L694.077 1217.33L693.852 1203.22L684.89 1203.36L684.914 1205.11L679.093 1205.2L678.988 1198.2L679.474 1198.2L679.524 1201.39L693.268 1201.18L693.259 1200.41L697.603 1204.15L696.201 1205.79L706.349 1214.51L706.93 1213.85L709.314 1215.9L715.344 1208.9L711.289 1205.41L711.307 1204.83L719.628 1205.06L720.036 1189.57L719.464 1189.55L719.542 1186.5L708.836 1186.21L708.375 1202.74L694.018 1190.41L688.57 1181.98L705.391 1182.06L705.423 1174.51L704.928 1174.51L704.946 1172.73L702.57 1172.72L702.579 1171.44L687.902 1171.31L687.874 1174.4L684.946 1174.38L684.976 1171.52L670.681 1171.37L670.669 1172.45L667.958 1172.42L667.853 1181.77L684.821 1181.96L690.855 1190.49L676.361 1190.49L676.549 1190.15L661.463 1181.48L657.008 1189.22L659.411 1190.61L658.637 1191.94L671.106 1199.11L671.738 1198.02L676.355 1197.92L676.506 1205.15L665.709 1205.38L667.869 1201.76L660.4 1197.29L652.935 1209.76Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M650.711 1250.72L651.493 1250.98L652.162 1257.5L654.435 1257.29L654.497 1258.26L669.057 1258.29L669.753 1259.71L677.864 1259.69L695.566 1259.82L696.447 1257.89L710.77 1258.14L710.911 1252.67L713.985 1252.77L713.6 1242.46L710.979 1242.54L710.911 1239L710.852 1235.93L654.363 1235.68L654.281 1243.38L650.591 1243.41L650.711 1250.72Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M724.252 913.157L739.949 913.088L742.026 913.189L744.126 913.599L746.299 914.614L752.699 917.948L755.801 919.447L757.803 920.308L759.752 920.718L766.685 920.797L766.611 910.871L773.719 910.838L773.643 900.065L771.378 900.078L771.309 890.158L761.569 890.214L758.956 890.057L756.3 888.941L750.536 886.071L748.117 885.174L745.61 884.79L724.032 884.841L724.252 913.157Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1318.74 641.891L1327.11 642.102L1327.08 642.717L1348.06 642.62L1348.05 638.364L1358.93 638.354L1358.02 596.079L1349.94 596.192L1349.97 606.945L1334.58 607.261L1334.56 607.834L1332.72 607.953L1332.41 614.099L1322.78 614.166L1322.82 620.279L1317.28 620.408L1317.35 629.065L1318.63 629.077L1318.74 641.891Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M791.292 868.904L807.133 866.442L808.771 876.671L823.619 874.942L823.474 873.774L817.092 823.276L802.123 825.404L803.133 834.702L797.436 835.785L796.334 833.663L794.171 832.904L790.9 833.181L788.518 834.755L788.42 844.203L799.289 843.047L799.564 845.816L788.627 847.576L791.292 868.904Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M885.275 741.802L889.023 741.784L889.098 758.358L908.487 758.272L908.475 755.465L918.215 755.413L918.227 757.773L926.151 757.744L926.144 755.953L934.801 755.909L934.797 753.991L941.428 753.96L941.442 757.614L949.104 757.579L948.958 726.137L935.606 726.197L935.663 739.038L934.393 739.041L934.418 745.094L918.101 745.164L918.052 735.225L885.242 735.382L885.275 741.802Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M677.669 1149.72L712.742 1149.56L713.294 1153.58L722.366 1153.23L722.378 1148.56L727.907 1148.58L727.949 1125.45L721.692 1125.44L721.695 1122.12L712.438 1122.1L712.429 1125.24L677.718 1126L677.669 1149.72Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M631.046 1082.75L682.77 1082.41L682.352 1059.78L631.244 1060.18L631.046 1082.75Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1099.65 479.901L1116.56 486.185L1146.94 481.129L1146.99 475.59L1146.4 475.607L1146.34 474.765L1155 474.65L1153.77 472.292L1157.73 469.446L1152.14 460.059L1147.61 462.572L1146.51 460.455L1144.21 460.484L1143.96 455.683L1133.09 455.817L1133.15 460.908L1130.77 460.946L1129.56 462.933L1125.43 460.535L1120.08 470.065L1124.4 472.598L1123.39 474.209L1122.17 474.064L1122.2 472.102L1117.03 472.171L1116.59 460.509L1101.48 460.647L1101.63 466.316L1099.36 472.292L1099.65 479.901ZM1137.09 472.598L1137.08 472.156L1137.25 471.519L1137.65 470.973L1138.19 470.597L1138.84 470.422L1139.42 470.47L1140.03 470.728L1140.52 471.179L1140.82 471.772L1140.9 472.435L1140.71 473.178L1140.32 473.716L1139.77 474.086L1139.12 474.249L1138.26 474.111L1137.7 473.754L1137.29 473.234L1137.09 472.598Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1215.92 645.053L1242.46 645.038L1242.25 638.603L1244.94 638.447L1244.53 610.521L1244.37 605.019L1244.38 604.044L1241.12 604.095L1241.14 603.162L1229.68 603.261L1229.45 575.67L1226.98 575.64L1226.91 573.906L1222.58 573.931L1222.54 577.929L1209.69 577.829L1209.61 589.271L1212.96 589.207L1213.58 608.06L1219.49 608.043L1219.49 612.596L1228.45 612.769L1228.34 607.998L1235.83 607.968L1236.47 636.475L1215.92 636.633L1215.92 645.053Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1164.8 517.934L1172.34 517.742L1172.38 516.972L1175.67 516.881L1175.71 518.403L1198.54 517.918L1198.55 516.301L1202.53 516.2L1202.58 517.046L1210.36 516.81L1210.33 508.139L1172.86 508.306L1172.49 479.546L1201.77 479.253L1202.37 503.051L1211.84 502.795L1211.84 498.546L1217.9 498.165L1217.6 488.86L1211.63 488.799L1211.43 484.334L1204.3 484.46L1203.98 476.599L1193.75 476.461L1193.44 468.697L1178.94 468.902L1179.12 476.943L1169.03 477.13L1168.95 478.672L1164.26 478.662L1164.8 517.934Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M631.584 1050.69L682.692 1043.91L679.309 1022.35L629.139 1028.64L631.584 1050.69Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M816.894 963.183L827.631 963.029L827.664 964.567L835.946 964.496L835.922 961.841L866.662 961.531L866.61 955.336L867.49 955.297L867.336 945.707L866.53 945.738L866.479 939.471L848.628 939.551L848.766 949.384L845.147 949.365L845.109 939.642L816.978 939.687L816.894 963.183Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M891.803 925.94L930.05 931.393L931.482 931.59L925.91 971.165L935.324 972.626L935.947 967.251L938.455 967.789L938.399 970.861L952.691 970.962L952.701 955.147L937.49 954.936L940.602 932.797L941.93 932.963L942.298 930.652L943.095 923.976L941.777 923.797L942.013 922.536L932.86 921.125L932.646 922.5L893.242 916.909L891.803 925.94Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1123.68 878.225L1127.23 879.149L1164.44 874.961L1165.86 865.653L1192.04 838.824L1190.99 832.998L1176.52 819.201L1171.48 825.654L1180.29 835.579L1158.72 857.393L1159.93 864.229L1128.41 868.577L1127.71 862.063L1126.1 859.679L1121.57 862.015L1123.68 878.225Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1217.85 826.006L1258.19 839.779L1260.03 835.53L1263.38 836.45L1260.27 839.661L1265.53 845.573L1294.19 877.823L1301.46 870.739L1275.06 840.657L1271.66 843.051L1268.14 839.633L1269.35 837.524L1272.36 837.57L1274.32 832.248L1221.97 815.919L1217.85 826.006Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1213.17 844.373L1238.3 874.619L1241.62 872.744L1245.41 876.624L1244.38 878.761L1240.83 877.666L1239.12 883.543L1292.53 901.664L1295.76 891.845L1255.76 877.21L1254.1 880.715L1251.36 879.145L1253.36 876.639L1250.17 872.772L1221.57 838.001L1213.17 844.373Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1025.59 1098.45L1028.98 1098.91L1029.11 1097.91L1033.3 1098.48L1032.99 1100.82L1033.82 1100.93L1033.86 1100.64L1041.7 1101.79L1041.79 1101.06L1048.35 1101.98L1048.48 1100.98L1062.62 1103.25L1062.76 1102.32L1062.25 1102.26L1063.15 1095.54L1064.77 1095.41L1066.4 1083.57L1069.4 1083.98L1070.39 1076.61L1064.89 1075.89L1065.06 1074.16L1061.51 1073.66L1061.28 1075.37L1059.86 1079.37L1058.13 1078.81L1058.23 1078.08L1052.85 1077.35L1052.95 1076.59L1047.57 1075.86L1047.67 1075.11L1042.3 1074.38L1042.4 1073.62L1037.03 1072.89L1037.56 1068.87L1030.35 1067.88L1029.4 1075.01L1030.04 1075.1L1028.4 1087.4L1027.11 1087.22L1025.59 1098.45Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1004.63 1158.29L1048.98 1165.28L1051.09 1152.87L1043.91 1149.35L1034.6 1146.69L1034.47 1147.43L1026.84 1143.64L1026.12 1144.44L1023.99 1144.4L1022.55 1143.14L1022.37 1141.21L1022.15 1131.38L1023.59 1129.79L1019.81 1126.07L1018.35 1127.84L1005.34 1125.97L1002.98 1144.36L1006.53 1144.85L1004.63 1158.29Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M989.801 1060.14L1025.15 1064.9L1028.81 1037.21L993.466 1032.46L989.801 1060.14Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1020.25 767.724L1026.1 767.724L1026.15 773.876L1050.9 773.838L1050.89 779.224L1087.21 779.124L1087.17 760.899L1055.31 760.973L1055.35 766.246L1050.49 766.272L1050.49 760.971L1020.24 761.082L1020.25 767.724Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M694.399 1061.96L707.207 1062.21L707.221 1059.15L709.251 1059.08L708.927 1037.03L707.221 1037.05L707.219 1029.57L713.266 1029.32L712.917 1017.42L712.9 1015.59L712.767 1002.23L705.383 1002.32L705.392 998.662L699.829 998.96L700.13 1002.4L694.555 1002.62L694.399 1061.96Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M965.377 1198.43L966.918 1198.52L966.552 1200.96L968.614 1201.14L968.823 1198.73L987.561 1201.57L987.154 1204.87L991.696 1205.59L991.974 1202.05L1008.77 1203.43L1008.49 1206.45L1011.03 1206.89L1011.31 1203.88L1033.07 1206.5L1034.22 1196.19L992.525 1192.28L992.751 1190.54L995.945 1190.78L999.235 1164.25L996.256 1163.71L994.022 1178.34L981.085 1176.53L980.095 1183.65L977.41 1183.35L976.753 1186.68L979.526 1187L979.422 1188.52L988.647 1189.84L988.447 1191.74L966.599 1189.14L965.377 1198.43Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M775.766 1034.51L785.465 1034.81L784.964 938.497L775.078 938.731L775.321 967.254L775.373 972.864L775.305 987.241L775.422 999.032L775.683 1020.67L775.72 1025L775.766 1034.51Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M692.373 1114.71L720.204 1114.45L719.892 1081.12L692.059 1081.37L692.373 1114.71Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1177.02 632.689L1208.23 632.469L1207.91 608.003L1213.57 608.061L1212.96 589.208L1209.61 589.272L1204.05 589.324L1204.48 601.955L1192.91 601.993L1192.65 575.765L1191.09 575.849L1191.03 573.904L1184.19 573.794L1184.52 606.188L1187.76 606.181L1187.81 607.522L1199.38 607.584L1199.45 624.153L1177.02 624.187L1177.02 632.689Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M628.262 864.74L636.813 864.697L636.721 844.921L640.992 844.91L641.075 864.676L649.621 864.653L649.533 844.877L653.804 844.866L653.892 864.639L662.434 864.613L662.284 830.643L653.731 830.67L653.792 843.294L649.53 843.311L649.461 828.034L640.92 828.063L640.988 843.336L636.716 843.347L636.655 830.72L628.113 830.746L628.262 864.74Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M928.716 1147.34L930.759 1149.44L929.593 1152.18L931.86 1153.14L931.521 1155.68L941.2 1161.39L947.75 1162.31L958.67 1159.41L959.301 1157.06L961.672 1156.09L962.531 1149.89L963.947 1150.06L964.64 1144.95L961.829 1136.5L958.94 1134.81L959.536 1133.79L956.989 1132.29L956.838 1131.09L940.778 1128.87L940.197 1130.23L938.988 1129.72L937.93 1132.24L935.026 1132.24L933.071 1136.91L932.024 1136.48L930.005 1141.29L931.058 1141.74L928.716 1147.34Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1027.92 955.199L1050.54 961.731L1078.26 965.666L1078.33 964.828L1083.96 965.318L1086.18 942.097L1085.33 926.019L1079.04 926.347L1079.17 928.874L1078.33 928.919L1078.36 929.669L1076.12 929.78L1076.21 931.472L1074.94 931.53L1075.47 941.724L1074.19 956.584L1069.51 956.17L1069.87 953.623L1052.54 951.166L1033.19 945.576L1032.85 946.781L1031.21 946.298L1030.61 948.404L1029.91 948.2L1027.92 955.199Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M967.484 969.796L987.813 969.947L1006.62 956.234L1018.02 945.181L1013.05 940.022L1012.45 940.597L1010.86 938.95L1009.66 940.1L1008.81 939.209L999.743 947.995L981.545 961.282L982.507 962.619L981.543 963.336L977.921 963.349L977.909 944.051L976.388 933.273L975.168 933.438L974.942 931.812L972.749 932.126L972.627 931.291L965.488 932.337L967.225 944.904L967.484 969.796Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M836.138 913.027L896.894 904.005L894.947 890.308L834.219 899.357L836.138 913.027Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M737.049 1120.81L764.209 1120.47L764.163 1116.72L764.134 1110.5L763.933 1090.15L736.727 1090.41L736.928 1110.76L737.049 1120.81Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1039.09 997.383L1042.93 997.924L1042.58 1000.48L1079.07 1005.54L1076.7 1022.89L1081.48 1023.56L1081.9 1020.7L1083.51 1020.92L1083.81 1018.8L1087.93 1019.37L1092.32 987.162L1087.38 986.462L1086.88 989.956L1082.92 991.294L1076.77 992.26L1071.25 992.745L1063.55 992.595L1057.63 991.812L1050.9 990.358L1046.52 988.733L1041.89 987.147L1040.77 995.379L1039.39 995.19L1039.09 997.383Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M708.953 941.554L711.838 941.51L711.933 937.332L771.22 937.053L771.161 934.004L775.135 933.843L775.082 928.962L771.037 929.007L770.949 924.918L726.304 925.239L709.319 925.337L708.953 941.554Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M790.157 1007.2L834.26 1007.59L834.39 989.886L790.243 989.763L790.157 1007.2Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M709.886 999.126L775.418 999.033L775.301 987.241L709.727 987.591L709.886 999.126Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M802.69 936.289L829.968 935.907L829.986 937.151L824.296 937.959L824.374 939.676L834.326 939.657L834.251 935.894L873.309 935.721L873.247 926.339L802.632 926.221L802.69 936.289Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M709.826 977.121L771.164 976.853L771.204 972.85L775.369 972.864L775.317 967.254L770.804 967.217L770.77 965.948L709.867 965.72L709.826 977.121Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1319.83 693.358L1345.17 693.25L1345.05 690.32L1346.79 690.259L1346.86 688.542L1349.63 688.484L1349.27 661.297L1358.11 661.271L1358.19 652.76L1347.53 652.818L1347.51 650.613L1339.77 650.581L1339.81 651.596L1327.75 651.914L1327.87 662.225L1339.7 662.074L1339.75 663.376L1341.75 663.437L1342.04 684.218L1340.68 684.226L1340.72 685.28L1319.89 685.531L1319.83 693.358Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M882.376 861.862L912.262 857.994L913.541 867.976L926.239 866.34L925.003 856.497L929.335 855.903L927.739 843.827L880.824 849.858L882.376 861.862Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M750.6 1145.71L783.789 1145.77L792.875 1159.06L804.595 1146.8L796.537 1137.98L796.27 1136.83L798.466 1136.74L798.34 1133.87L796.045 1133.96L796.032 1132.7L776.095 1132.43L776.032 1135.75L760.966 1135.8L750.627 1135.85L750.6 1145.71Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M929.049 1204.88L932.881 1205.41L933.515 1200.71L934.072 1200.78L934.164 1203.15L943.405 1204.42L944.128 1202.18L944.682 1202.25L944.046 1206.96L947.429 1207.42L948.25 1201.36L947.307 1201.23L947.475 1199.99L949.098 1200.21L950.027 1193.35L947.376 1192.98L948.437 1189.69L949.88 1189.63L949.901 1190.33L951.596 1190.27L950.971 1174.29L949.256 1174.35L949.054 1169.06L948.01 1168.92L947.75 1162.31L941.2 1161.39L939.193 1167.7L938.156 1167.55L936.94 1171.35L935.316 1170.83L930.048 1187.29L931.663 1187.81L931.87 1187.15L933.247 1187.59L933.384 1191.05L930.741 1190.68L929.808 1197.55L931.391 1197.77L931.222 1199.01L929.867 1198.82L929.049 1204.88Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M713.266 1029.32L756.313 1028.64L770.989 1028.3L771.002 1025.06L775.72 1025L775.683 1020.67L770.824 1020.69L770.685 1017.14L712.917 1017.42L713.266 1029.32Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M830.71 868.681L882.38 861.861L880.828 849.858L828.708 855.235L830.71 868.681Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1032.74 755.759L1082.1 755.626L1082.09 747.054L1076.72 747.067L1076.71 741.451L1032.68 741.565L1032.74 755.759Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1269.27 622.943L1272.66 622.825L1272.73 623.835L1306.1 624.078L1306.08 617.616L1304.75 617.581L1304.8 614.681L1302.24 614.762L1302.3 615.289L1286.07 615.317L1286.11 612.922L1285.13 612.952L1285.31 594.736L1286.48 594.682L1286.48 593.823L1305.24 593.657L1305.03 586.03L1282.4 585.891L1282.42 586.529L1278.27 586.681L1278.4 590.664L1278.33 590.716L1278.33 615.286L1272.66 615.473L1272.67 617.382L1269.29 617.504L1269.27 622.943Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M955.452 1028.98L956.436 1033.84L959.862 1038.19L963.994 1040.24L963.08 1046.29L970.053 1047.43L970.777 1041.3L977.635 1039.52L981.909 1034.41L982.438 1027.1L980.389 1020.71L974.346 1015.39L968.142 1014.36L964.314 1015.16L959.715 1016.99L956.684 1021.84L955.452 1028.98Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M679.174 909.282L704.281 909.428L704.428 885.285L679.32 885.14L679.174 909.282Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M948.652 756.358L971.956 756.43L972.117 729.698L958.814 729.567L955.239 729.529L955.208 733.048L948.922 732.983L948.652 756.358Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M680.407 960.17L713.298 959.554L713.085 941.42L680.27 942.032L680.407 960.17Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M969.447 1002.2L973.239 1002.24L973.206 1010.04L982.529 1010.1L982.543 1008.15L998.163 1008.29L998.317 988.55L987.932 988.456L987.951 986.016L973.313 985.875L973.281 992.86L969.527 992.839L969.447 1002.2Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1096.2 626.526L1099.87 626.063L1100.23 627.75L1121.41 627.102L1121.52 627.769L1120.49 627.935L1122.18 640.246L1143.73 637.113L1141.98 624.943L1126.46 627.014L1126.02 624.28L1128.1 623.988L1127.82 621.734L1128.7 621.64L1127.47 613.973L1118.28 615.235L1118.48 617.245L1097.99 620.166L1098.1 620.61L1095.39 621.007L1096.2 626.526Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M896.89 904.005L898.827 903.678L899.383 907.968L911.718 906.529L905.13 865.721L892 867.281L896.89 904.005Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M878.213 758.503L889.094 758.358L889.042 746.972L918.155 746.683L918.048 735.226L885.238 735.382L885.091 746.611L878.737 746.783L878.213 758.503Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1277.25 1210.33L1303.24 1210.18L1303.52 1233.05L1310.8 1232.94L1310.67 1203.54L1309.45 1203.57L1309.3 1200.32L1280.1 1200.05L1280.12 1201.02L1277.04 1201.1L1277.25 1210.33Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M764.065 1103.5L765.607 1103.5L801.403 1103.28L801.402 1102.49L801.334 1091.67L801.326 1090.05L763.988 1090.27L764.065 1103.5Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M935.213 852.773L977.458 847.324L976.125 836.143L933.661 841.628L935.213 852.773Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M969.85 1153.35L1004.62 1158.29L1006.52 1144.87L971.751 1139.94L969.85 1153.35Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M732.849 961.46L752.941 961.344L752.854 953.378L751.141 953.527L751.014 947.079L752.787 947.082L752.709 939.617L739.449 939.63L739.415 937.254L732.816 937.283L732.849 961.46Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M737.164 1130.86L761.94 1130.39L778.171 1130.09L778.118 1120.32L737.049 1120.81L737.164 1130.86Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M784.543 1060.48L804.271 1060.53L804.243 1041.33L792.56 1041.09L792.466 1037.35L789.75 1037.37L789.791 1041.06L784.454 1040.97L784.543 1060.48Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M754.091 1047.19L754.34 1047.65L755.438 1046.04L758.948 1048.28L761.072 1048.27L761.341 1061.58L776.077 1061.25L775.967 1039.42L762.529 1039.65L762.607 1036.72L755.737 1036.81L755.797 1044.02L754.091 1047.19Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M713.563 1014.01L744.168 1013.5L743.992 1000.78L713.468 1001.28L713.563 1014.01Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M882.457 724.839L902.224 724.74L902.207 721.708L924.831 721.592L924.785 712.721L901.33 712.84L901.346 715.449L882.413 715.54L882.457 724.839Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M881.124 892.283L894.943 890.309L891.407 864.179L877.337 865.775L881.124 892.283Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M778.169 1130.07L792.493 1129.98L792.349 1106.13L778.024 1106.21L778.04 1107.89L778.097 1118.05L778.169 1130.07Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1001.61 1181.58L1003.56 1184.66L1007.44 1185.57L1010.47 1184.82L1011.73 1184.2L1012.58 1185.25L1011.29 1186.73L1017.32 1191.97L1021.82 1187.17L1015.4 1182.17L1014.41 1183.42L1013.51 1182.55L1014.47 1179.59L1014.23 1177L1016.75 1160.44L1006.12 1158.83L1003.39 1175.17L1001.67 1177.66L1001.61 1181.58Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M828.049 843.689L854.877 840.313L853.336 828.058L826.521 831.416L828.049 843.689Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1298.89 679.945L1303.17 680.044L1303.1 680.755L1328.37 680.641L1328.34 673.046L1323.39 673.024L1307.59 672.955L1307.53 671.789L1306.26 671.874L1306.21 663.396L1306.19 659.008L1298.61 659.206L1298.51 676.264L1298.98 676.276L1298.89 679.945Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1313.89 1207.49L1323.42 1207.52L1323.34 1204.9L1326.45 1204.92L1326.56 1216.46L1322.42 1216.61L1322.46 1224.01L1332.2 1223.76L1332.22 1219.85L1333.84 1219.74L1333.64 1201.29L1332.34 1201.3L1332.36 1197.58L1323.16 1197.71L1323.14 1197.08L1313.75 1197.35L1313.89 1207.49Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M728.521 1202.84L737.819 1204.16L741.276 1168.66L732.371 1167.41L728.521 1202.84Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1001.31 741.166L1023.48 740.81L1023.16 730.673L1019.33 730.618L1019.15 725.286L1001.03 725.737L1001.31 741.166Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M750.504 1196.39L760.598 1197.83L762.026 1187.43L772.393 1188.71L773.349 1180.39L749.969 1176.67L748.805 1185.27L752.096 1185.68L750.504 1196.39Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M991.998 1022.79L993.778 1023.04L993.67 1023.89L994.078 1023.94L993.579 1026.87L995.205 1027.09L995.671 1024.15L1018.19 1027.21L1019.95 1013.84L1011.51 1012.7L1011.15 1015.43L993.29 1013.02L991.998 1022.79Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1027.12 734.868L1046.69 734.947L1046.33 719.024L1027.1 718.891L1027.12 734.868Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M745.114 872.51L747.282 879.322L753.741 878.5L753.133 881.601L762.633 881.928L761.884 879.069L766.35 879.379L767.573 872.326L767.555 867.324L745.454 866.857L745.114 872.51Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M744.805 1013.23L769.26 1013.03L768.908 1001.87L744.577 1002.3L744.805 1013.23Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1294.22 579.063L1296.67 579.003L1296.69 581.213L1330.03 581.077L1330.01 573.512L1296.75 573.674L1296.68 575.904L1294.3 575.899L1294.22 579.063Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M950.293 1251.87L951.688 1251.56L953.984 1247.37L957.343 1251.84L963.81 1251.9L963.811 1243.99L968.038 1229.54L962.814 1232.51L962.018 1234.42L958.539 1234.98L956.719 1234.07L949.568 1230.47L951.49 1239.26L950.351 1250.16L950.293 1251.87Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1036.85 1146.38L1045.28 1147.64L1049.21 1149.32L1052.62 1121.6L1046.85 1120.35L1036.85 1146.38Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M765.656 1213.3L769.264 1216.42L768.273 1217.94L768.76 1218.33L768.463 1218.84L768.757 1219.1L768.593 1219.38L771.316 1221.53L771.909 1220.71L777.417 1225.09L780.156 1221.51L781.344 1222.55L782.426 1221.36L783.377 1222.22L786.408 1221.78L787.592 1220.44L789.397 1221.9L792.715 1217.66L784.57 1210.64L780.128 1215.78L774.502 1210.94L773.251 1212.68L769.053 1209.31L765.656 1213.3Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1320.23 605.222L1322.81 605.151L1322.9 607.259L1321.79 607.27L1321.78 610.631L1327.45 610.696L1327.38 610.066L1329.45 609.951L1329.44 609.355L1331.16 609.247L1331.15 608.609L1332.67 608.578L1332.66 607.939L1334.55 607.813L1334.54 607.259L1337.19 607.04L1337.19 604.451L1338.42 604.423L1338.3 599.422L1336.38 599.395L1336.43 598.92L1334.65 598.91L1334.64 598.315L1332.67 598.247L1332.64 597.786L1325.92 597.759L1325.94 594.194L1320.99 594.134L1321.1 595.821L1320.55 595.865L1320.53 597.566L1320.19 597.581L1320.23 605.222Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M982.735 1266.46L996.208 1266.1L996.556 1252.25L982.269 1252.36L982.735 1266.46Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1018.87 1022.03L1026.13 1022.99L1029.4 998.356L1022.1 997.379L1018.87 1022.03Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M783.972 800.317L792.681 800.269L792.56 779.679L783.851 779.723L783.972 800.317Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1250.21 716.551L1254.01 720.664L1255.29 720.046L1256.37 720.861L1256.15 722.273L1261.15 724.769L1263.6 722.215L1266.75 710.345L1266.76 709.381L1266.44 708.357L1265.98 707.569L1265.25 706.958L1264.35 706.522L1263.49 706.564L1262.45 707.061L1258.52 709.437L1251.95 713.474L1250.21 716.551Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1012.98 995.143L1022.64 996.383L1022.5 997.433L1028.9 998.29L1029.04 997.223L1035.39 998.171L1036.37 990.849L1029.12 989.86L1028.83 988.534L1025.24 989.337L1013.96 987.809L1012.98 995.143Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M843.351 773.562L844.144 773.45L844.464 775.761L864.436 772.907L863.295 764.71L843.302 767.485L843.627 769.795L842.833 769.906L843.351 773.562Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1117 772.756L1127.01 793.503L1134.14 790.147L1129.79 780.829L1128.76 781.323L1123.21 769.755L1117 772.756Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1029.3 1189.36L1033.66 1193.68L1042.65 1194.62L1043.14 1191.3L1041.4 1191.07L1042.41 1180.96L1037.37 1180.33L1037.52 1179.11L1030.93 1178.3L1029.3 1189.36Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M670.696 1059.19L684.178 1057.87L682.544 1046.14L669.076 1048.06L670.696 1059.19Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1053.68 735.459L1064.12 735.307L1063.82 718.694L1056.1 718.746L1056.1 727.762L1053.63 727.733L1053.68 735.459Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1136.53 519.094L1158.45 518.677L1158.32 511.868L1136.4 512.286L1136.53 519.094Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M627.401 1218.13L637.639 1218.09L637.735 1222.16L644.468 1222.23L644.22 1206.7L637.689 1206.78L637.744 1213.74L627.383 1213.79L627.401 1218.13Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M838.763 789.604L852.153 787.619L850.799 778.445L842.926 779.605L842.463 776.427L836.933 777.246L838.763 789.604Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1169.6 584.352L1183.93 584.368L1183.92 575.724L1169.56 575.745L1169.6 584.352Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1064.01 729.678L1071.16 735.281L1076.39 735.036L1079.33 730.572L1063.82 720.269L1064.01 729.678Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1135.15 894.588L1153.34 894.552L1153.34 889.073L1144.03 888.996L1141.81 888.926L1141.74 886.955L1139.34 887.021L1135.09 887.131L1135.15 894.588Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1244.53 610.521L1250.51 610.449L1250.49 606.073L1254.54 605.934L1254.56 601.26L1252.56 601.233L1252.53 594.441L1245.86 594.493L1246.03 605.05L1244.37 605.02L1244.53 610.521Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1264.81 571.032L1272.32 570.898L1272.35 572.16L1280.52 571.867L1280.32 561.149L1276.71 561.176L1276.77 565.507L1264.71 565.655L1264.81 571.032Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1267.05 1231.84L1278.09 1232L1278.09 1231.25L1280.05 1231.28L1280.01 1226.5L1277.84 1226.02L1277.8 1223.07L1266.85 1222.92L1267.05 1231.84Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1319.56 729.829L1330.3 728.529L1329.17 719.139L1318.43 720.461L1319.56 729.829Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1342.95 726.929L1353.69 725.623L1352.55 716.271L1341.82 717.603L1342.95 726.929Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1163.66 933.565L1168.31 933.618L1168.57 912.508L1163.92 912.446L1163.66 933.565Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1245.91 588.45L1252.34 588.52L1252.37 583.669L1253.97 583.581L1253.92 578.533L1250.57 578.519L1250.46 573.903L1245.9 573.857L1245.91 588.45Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1275.54 727.715L1279.57 729.694L1278.13 732.635L1279.34 733.245L1279.03 733.832L1281.79 735.18L1284.71 729.223L1286.98 730.34L1288.86 726.49L1278.59 721.447L1275.54 727.715Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1321.04 738.143L1336.01 736.302L1335.36 730.987L1320.38 732.824L1321.04 738.143Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M728.93 1216.19L735.028 1217.08L735.969 1206.56L730.069 1205.81L728.93 1216.19Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1355.73 728.005L1360.68 727.335L1359.29 715.587L1354.28 716.203L1355.73 728.005Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M902.473 1264.93L903.38 1268.97L906.252 1268.39L906.999 1267.81L907.858 1256.34L902.42 1257.41L902.3 1261.87L902.473 1264.93Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1116.86 726.562L1121.88 737.042L1125.94 735.095L1120.9 724.61L1116.86 726.562Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M620.589 1205.15L630.285 1205.47L630.204 1200.07L620.559 1199.93L620.589 1205.15Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M926.814 867.454L937.239 866.176L936.648 861.444L926.217 862.763L926.814 867.454Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1278.74 685.542L1280.84 685.742L1280.64 687.918L1283 688.093L1283.72 677.22L1279.38 676.909L1278.74 685.542Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1332.85 727.457L1337.39 726.921L1336.3 718.332L1331.76 718.791L1332.85 727.457Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1001.36 754.736L1016.72 754.705L1016.71 752.491L1009.56 752.491L1001.32 752.523L1001.36 754.736Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M684.427 805.429L687.539 805.419L687.547 808.124L734.301 807.903L781.791 807.731L781.467 723.976L702.328 724.237L687.22 724.223L687.218 726.942L684.121 726.95L684.427 805.429Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1153.58 1242.28L1198.71 1242.75L1198.7 1234.76L1239.45 1234.92L1238.69 1186.33L1154.02 1187.97L1153.58 1242.28Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M726.53 1278.67L745.582 1265.58L752.829 1272.04L745.373 1280.46L768.725 1279.89L771.883 1280.74L771.305 1283.46L781.536 1284.44L781.414 1281.47L808.668 1280.89L808.748 1274.19L806.94 1272.89L808.818 1270.29L804.068 1266.37L807.601 1259.22L800.043 1253.46L798.73 1258.25L796.601 1262.02L794.665 1264.44L798.602 1267.71L796.208 1272.48L792.939 1272.42L785.173 1273.12L784.053 1268.64L780.601 1269.36L781.241 1273.34L776.405 1273.95L770.741 1274.03L770.629 1272.48L769.761 1272.52L771.025 1261.02L760.202 1257.72L756.898 1268.93L753.018 1265.98L749.155 1262.02L746.84 1258.67L726.092 1259.26L726.53 1278.67Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M776.081 1051.22L778.899 1051.27L779.284 1065.83L781.067 1065.8L780.831 1051.13L784.487 1051.13L784.488 1047.99L780.585 1048.03L780.619 1034.5L778.742 1034.46L778.787 1048.48L775.976 1048.42L776.081 1051.22Z"
          fill="#D9D0C9"
          stroke="#B9A99C"
          stroke-width="0.75"
        />

        <g
          className="selectable"
          onClick={() => handleBuildingSelect("BLDG_8")}
        >
          <g filter="url(#filter0_d)">
          <path
            className="building"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M872.014 1244.5L916.928 1243.1L919.48 1212.47L907.712 1207.71L907.036 1198.59L920.341 1202.12L923.669 1162.19L911.074 1160.29L910.035 1166.09L894.013 1164.1L894.811 1158.86L874.39 1156.1L872.158 1178.92L889.266 1186.25L885.254 1194.38L872.126 1194.61L872.014 1244.5Z"
            fill={buildColor}
            stroke={buildStrokeColor}
            strokeWidth={buildStrokeWidth}
          />
          </g>
          <g filter="url(#filter1_d)">
          <rect
            className="marker"
            x="843.001"
            y="1173"
            width="106"
            height="31"
            rx="3"
            fill="white"
          />
          </g>
          <g filter="url(#filter2_d)">
          <path
            className="arrow"
            d="M895.197 1210.32C894.809 1210.7 894.193 1210.7 893.805 1210.32L885.447 1202.22C884.802 1201.59 885.245 1200.5 886.143 1200.5L902.859 1200.5C903.757 1200.5 904.2 1201.59 903.555 1202.22L895.197 1210.32Z"
            fill="white"
          />
          </g>
          <path
            d="M868.351 1185.22H871.792V1186H867.388V1178.74H868.351V1185.22ZM874.979 1186.1C874.248 1186.1 873.652 1185.86 873.194 1185.38C872.735 1184.9 872.505 1184.26 872.505 1183.45V1183.28C872.505 1182.75 872.607 1182.27 872.809 1181.85C873.016 1181.43 873.302 1181.1 873.667 1180.86C874.036 1180.62 874.435 1180.5 874.864 1180.5C875.566 1180.5 876.111 1180.73 876.5 1181.2C876.889 1181.66 877.084 1182.32 877.084 1183.18V1183.57H873.428C873.441 1184.1 873.596 1184.53 873.892 1184.86C874.191 1185.18 874.57 1185.35 875.029 1185.35C875.355 1185.35 875.631 1185.28 875.857 1185.15C876.083 1185.01 876.281 1184.84 876.45 1184.62L877.014 1185.06C876.562 1185.75 875.883 1186.1 874.979 1186.1ZM874.864 1181.26C874.492 1181.26 874.179 1181.4 873.927 1181.67C873.674 1181.94 873.518 1182.32 873.458 1182.81H876.161V1182.74C876.134 1182.27 876.008 1181.91 875.782 1181.65C875.556 1181.39 875.25 1181.26 874.864 1181.26ZM881.487 1186C881.434 1185.89 881.391 1185.7 881.358 1185.43C880.929 1185.88 880.417 1186.1 879.822 1186.1C879.29 1186.1 878.852 1185.95 878.51 1185.65C878.171 1185.35 878.001 1184.97 878.001 1184.5C878.001 1183.94 878.214 1183.51 878.64 1183.2C879.069 1182.88 879.67 1182.73 880.445 1182.73H881.343V1182.3C881.343 1181.98 881.246 1181.73 881.054 1181.54C880.861 1181.34 880.576 1181.25 880.201 1181.25C879.872 1181.25 879.596 1181.33 879.373 1181.5C879.15 1181.66 879.039 1181.86 879.039 1182.1H878.111C878.111 1181.83 878.206 1181.57 878.395 1181.32C878.588 1181.07 878.847 1180.87 879.173 1180.72C879.502 1180.58 879.863 1180.5 880.256 1180.5C880.877 1180.5 881.364 1180.66 881.717 1180.97C882.069 1181.28 882.252 1181.71 882.265 1182.25V1184.74C882.265 1185.23 882.329 1185.63 882.455 1185.92V1186H881.487ZM879.956 1185.3C880.246 1185.3 880.52 1185.22 880.779 1185.07C881.039 1184.92 881.226 1184.73 881.343 1184.49V1183.38H880.62C879.489 1183.38 878.924 1183.71 878.924 1184.37C878.924 1184.66 879.02 1184.89 879.213 1185.05C879.406 1185.22 879.654 1185.3 879.956 1185.3ZM886.32 1181.43C886.18 1181.41 886.029 1181.4 885.866 1181.4C885.261 1181.4 884.851 1181.65 884.634 1182.17V1186H883.712V1180.6H884.609L884.624 1181.23C884.927 1180.74 885.356 1180.5 885.911 1180.5C886.091 1180.5 886.227 1180.53 886.32 1180.57V1181.43ZM888.046 1180.6L888.076 1181.28C888.488 1180.76 889.027 1180.5 889.692 1180.5C890.832 1180.5 891.407 1181.15 891.417 1182.43V1186H890.494V1182.43C890.491 1182.04 890.401 1181.75 890.225 1181.57C890.052 1181.38 889.781 1181.29 889.412 1181.29C889.113 1181.29 888.85 1181.37 888.624 1181.53C888.398 1181.69 888.222 1181.9 888.096 1182.15V1186H887.173V1180.6H888.046ZM893.811 1186H892.888V1180.6H893.811V1186ZM892.814 1179.17C892.814 1179.02 892.858 1178.9 892.948 1178.79C893.041 1178.69 893.178 1178.64 893.357 1178.64C893.537 1178.64 893.673 1178.69 893.766 1178.79C893.859 1178.9 893.906 1179.02 893.906 1179.17C893.906 1179.32 893.859 1179.45 893.766 1179.55C893.673 1179.65 893.537 1179.7 893.357 1179.7C893.178 1179.7 893.041 1179.65 892.948 1179.55C892.858 1179.45 892.814 1179.32 892.814 1179.17ZM896.165 1180.6L896.195 1181.28C896.607 1180.76 897.146 1180.5 897.811 1180.5C898.951 1180.5 899.527 1181.15 899.536 1182.43V1186H898.614V1182.43C898.611 1182.04 898.521 1181.75 898.345 1181.57C898.172 1181.38 897.901 1181.29 897.532 1181.29C897.232 1181.29 896.97 1181.37 896.744 1181.53C896.518 1181.69 896.341 1181.9 896.215 1182.15V1186H895.292V1180.6H896.165ZM900.709 1183.26C900.709 1182.42 900.903 1181.75 901.292 1181.25C901.681 1180.75 902.196 1180.5 902.838 1180.5C903.496 1180.5 904.01 1180.74 904.379 1181.2L904.424 1180.6H905.267V1185.87C905.267 1186.57 905.059 1187.12 904.643 1187.52C904.231 1187.92 903.676 1188.12 902.978 1188.12C902.589 1188.12 902.208 1188.04 901.836 1187.87C901.463 1187.71 901.179 1187.48 900.983 1187.19L901.462 1186.64C901.857 1187.13 902.341 1187.37 902.913 1187.37C903.362 1187.37 903.711 1187.24 903.96 1186.99C904.213 1186.74 904.339 1186.38 904.339 1185.92V1185.46C903.97 1185.89 903.466 1186.1 902.828 1186.1C902.196 1186.1 901.684 1185.85 901.292 1185.34C900.903 1184.83 900.709 1184.13 900.709 1183.26ZM901.636 1183.36C901.636 1183.97 901.761 1184.45 902.01 1184.8C902.26 1185.14 902.609 1185.32 903.058 1185.32C903.639 1185.32 904.067 1185.05 904.339 1184.52V1182.06C904.057 1181.54 903.633 1181.29 903.068 1181.29C902.619 1181.29 902.268 1181.46 902.015 1181.81C901.762 1182.16 901.636 1182.68 901.636 1183.36ZM912.528 1186C912.475 1185.89 912.432 1185.7 912.399 1185.43C911.97 1185.88 911.458 1186.1 910.863 1186.1C910.331 1186.1 909.893 1185.95 909.551 1185.65C909.212 1185.35 909.042 1184.97 909.042 1184.5C909.042 1183.94 909.255 1183.51 909.681 1183.2C910.11 1182.88 910.711 1182.73 911.486 1182.73H912.384V1182.3C912.384 1181.98 912.287 1181.73 912.095 1181.54C911.902 1181.34 911.617 1181.25 911.242 1181.25C910.913 1181.25 910.637 1181.33 910.414 1181.5C910.191 1181.66 910.08 1181.86 910.08 1182.1H909.152C909.152 1181.83 909.247 1181.57 909.436 1181.32C909.629 1181.07 909.888 1180.87 910.214 1180.72C910.543 1180.58 910.904 1180.5 911.297 1180.5C911.918 1180.5 912.405 1180.66 912.758 1180.97C913.11 1181.28 913.293 1181.71 913.306 1182.25V1184.74C913.306 1185.23 913.37 1185.63 913.496 1185.92V1186H912.528ZM910.997 1185.3C911.287 1185.3 911.561 1185.22 911.82 1185.07C912.08 1184.92 912.267 1184.73 912.384 1184.49V1183.38H911.661C910.53 1183.38 909.965 1183.71 909.965 1184.37C909.965 1184.66 910.061 1184.89 910.254 1185.05C910.447 1185.22 910.695 1185.3 910.997 1185.3ZM915.626 1180.6L915.655 1181.28C916.068 1180.76 916.606 1180.5 917.271 1180.5C918.412 1180.5 918.987 1181.15 918.997 1182.43V1186H918.074V1182.43C918.071 1182.04 917.981 1181.75 917.805 1181.57C917.632 1181.38 917.361 1181.29 916.992 1181.29C916.693 1181.29 916.43 1181.37 916.204 1181.53C915.978 1181.69 915.802 1181.9 915.675 1182.15V1186H914.753V1180.6H915.626ZM920.164 1183.26C920.164 1182.43 920.36 1181.76 920.753 1181.26C921.145 1180.76 921.659 1180.5 922.294 1180.5C922.925 1180.5 923.426 1180.72 923.795 1181.15V1178.34H924.717V1186H923.87L923.825 1185.42C923.456 1185.87 922.942 1186.1 922.284 1186.1C921.659 1186.1 921.148 1185.84 920.753 1185.33C920.36 1184.82 920.164 1184.15 920.164 1183.33V1183.26ZM921.087 1183.36C921.087 1183.97 921.213 1184.45 921.466 1184.8C921.718 1185.14 922.068 1185.32 922.513 1185.32C923.098 1185.32 923.525 1185.05 923.795 1184.53V1182.05C923.519 1181.54 923.095 1181.29 922.523 1181.29C922.071 1181.29 921.718 1181.46 921.466 1181.81C921.213 1182.16 921.087 1182.68 921.087 1183.36ZM861.603 1191.53H859.269V1198H858.316V1191.53H855.987V1190.74H861.603V1191.53ZM864.276 1198.1C863.545 1198.1 862.95 1197.86 862.491 1197.38C862.032 1196.9 861.803 1196.26 861.803 1195.45V1195.28C861.803 1194.75 861.904 1194.27 862.107 1193.85C862.313 1193.43 862.599 1193.1 862.965 1192.86C863.334 1192.62 863.733 1192.5 864.161 1192.5C864.863 1192.5 865.408 1192.73 865.797 1193.2C866.186 1193.66 866.381 1194.32 866.381 1195.18V1195.57H862.725C862.738 1196.1 862.893 1196.53 863.189 1196.86C863.488 1197.18 863.867 1197.35 864.326 1197.35C864.652 1197.35 864.928 1197.28 865.154 1197.15C865.38 1197.01 865.578 1196.84 865.747 1196.62L866.311 1197.06C865.859 1197.75 865.181 1198.1 864.276 1198.1ZM864.161 1193.26C863.789 1193.26 863.477 1193.4 863.224 1193.67C862.971 1193.94 862.815 1194.32 862.755 1194.81H865.458V1194.74C865.432 1194.27 865.305 1193.91 865.079 1193.65C864.853 1193.39 864.547 1193.26 864.161 1193.26ZM870.785 1198C870.731 1197.89 870.688 1197.7 870.655 1197.43C870.226 1197.88 869.714 1198.1 869.119 1198.1C868.587 1198.1 868.15 1197.95 867.807 1197.65C867.468 1197.35 867.299 1196.97 867.299 1196.5C867.299 1195.94 867.511 1195.51 867.937 1195.2C868.366 1194.88 868.968 1194.73 869.742 1194.73H870.64V1194.3C870.64 1193.98 870.544 1193.73 870.351 1193.54C870.158 1193.34 869.874 1193.25 869.498 1193.25C869.169 1193.25 868.893 1193.33 868.67 1193.5C868.447 1193.66 868.336 1193.86 868.336 1194.1H867.408C867.408 1193.83 867.503 1193.57 867.693 1193.32C867.885 1193.07 868.145 1192.87 868.471 1192.72C868.8 1192.58 869.16 1192.5 869.553 1192.5C870.175 1192.5 870.662 1192.66 871.014 1192.97C871.366 1193.28 871.549 1193.71 871.563 1194.25V1196.74C871.563 1197.23 871.626 1197.63 871.752 1197.92V1198H870.785ZM869.254 1197.3C869.543 1197.3 869.817 1197.22 870.076 1197.07C870.336 1196.92 870.524 1196.73 870.64 1196.49V1195.38H869.917C868.786 1195.38 868.221 1195.71 868.221 1196.37C868.221 1196.66 868.318 1196.89 868.51 1197.05C868.703 1197.22 868.951 1197.3 869.254 1197.3ZM875.173 1197.35C875.503 1197.35 875.79 1197.25 876.036 1197.05C876.282 1196.85 876.419 1196.6 876.445 1196.3H877.318C877.301 1196.61 877.195 1196.9 876.999 1197.18C876.803 1197.46 876.54 1197.68 876.211 1197.85C875.885 1198.02 875.539 1198.1 875.173 1198.1C874.439 1198.1 873.854 1197.86 873.418 1197.37C872.986 1196.87 872.77 1196.2 872.77 1195.35V1195.2C872.77 1194.67 872.866 1194.2 873.059 1193.8C873.252 1193.39 873.528 1193.07 873.887 1192.84C874.249 1192.62 874.676 1192.5 875.168 1192.5C875.774 1192.5 876.276 1192.68 876.675 1193.05C877.077 1193.41 877.291 1193.88 877.318 1194.46H876.445C876.419 1194.11 876.286 1193.82 876.046 1193.6C875.81 1193.37 875.518 1193.26 875.168 1193.26C874.7 1193.26 874.336 1193.43 874.076 1193.77C873.82 1194.11 873.692 1194.59 873.692 1195.23V1195.41C873.692 1196.03 873.82 1196.51 874.076 1196.84C874.332 1197.18 874.698 1197.35 875.173 1197.35ZM879.278 1193.26C879.687 1192.75 880.219 1192.5 880.874 1192.5C882.014 1192.5 882.59 1193.15 882.6 1194.43V1198H881.677V1194.43C881.674 1194.04 881.584 1193.75 881.408 1193.57C881.235 1193.38 880.964 1193.29 880.595 1193.29C880.295 1193.29 880.033 1193.37 879.807 1193.53C879.581 1193.69 879.404 1193.9 879.278 1194.15V1198H878.355V1190.34H879.278V1193.26ZM884.984 1198H884.061V1192.6H884.984V1198ZM883.986 1191.17C883.986 1191.02 884.031 1190.9 884.121 1190.79C884.214 1190.69 884.35 1190.64 884.53 1190.64C884.709 1190.64 884.846 1190.69 884.939 1190.79C885.032 1190.9 885.078 1191.02 885.078 1191.17C885.078 1191.32 885.032 1191.45 884.939 1191.55C884.846 1191.65 884.709 1191.7 884.53 1191.7C884.35 1191.7 884.214 1191.65 884.121 1191.55C884.031 1191.45 883.986 1191.32 883.986 1191.17ZM887.338 1192.6L887.367 1193.28C887.78 1192.76 888.318 1192.5 888.983 1192.5C890.124 1192.5 890.699 1193.15 890.709 1194.43V1198H889.786V1194.43C889.783 1194.04 889.693 1193.75 889.517 1193.57C889.344 1193.38 889.073 1193.29 888.704 1193.29C888.405 1193.29 888.142 1193.37 887.916 1193.53C887.69 1193.69 887.514 1193.9 887.387 1194.15V1198H886.465V1192.6H887.338ZM891.881 1195.26C891.881 1194.42 892.075 1193.75 892.464 1193.25C892.853 1192.75 893.369 1192.5 894.011 1192.5C894.669 1192.5 895.183 1192.74 895.552 1193.2L895.597 1192.6H896.439V1197.87C896.439 1198.57 896.232 1199.12 895.816 1199.52C895.404 1199.92 894.848 1200.12 894.15 1200.12C893.761 1200.12 893.38 1200.04 893.008 1199.87C892.636 1199.71 892.351 1199.48 892.155 1199.19L892.634 1198.64C893.03 1199.13 893.513 1199.37 894.085 1199.37C894.534 1199.37 894.883 1199.24 895.133 1198.99C895.385 1198.74 895.512 1198.38 895.512 1197.92V1197.46C895.143 1197.89 894.639 1198.1 894.001 1198.1C893.369 1198.1 892.857 1197.85 892.464 1197.34C892.075 1196.83 891.881 1196.13 891.881 1195.26ZM892.809 1195.36C892.809 1195.97 892.933 1196.45 893.183 1196.8C893.432 1197.14 893.781 1197.32 894.23 1197.32C894.812 1197.32 895.239 1197.05 895.512 1196.52V1194.06C895.229 1193.54 894.805 1193.29 894.24 1193.29C893.791 1193.29 893.44 1193.46 893.188 1193.81C892.935 1194.16 892.809 1194.68 892.809 1195.36ZM900.514 1198V1190.74H902.888C903.676 1190.74 904.268 1190.9 904.663 1191.23C905.062 1191.55 905.262 1192.03 905.262 1192.67C905.262 1193.01 905.165 1193.31 904.973 1193.58C904.78 1193.84 904.517 1194.04 904.185 1194.18C904.577 1194.29 904.886 1194.5 905.112 1194.81C905.342 1195.11 905.456 1195.48 905.456 1195.91C905.456 1196.56 905.245 1197.07 904.823 1197.44C904.401 1197.81 903.804 1198 903.033 1198H900.514ZM901.472 1194.6V1197.22H903.053C903.498 1197.22 903.849 1197.1 904.105 1196.87C904.364 1196.64 904.494 1196.32 904.494 1195.92C904.494 1195.04 904.018 1194.6 903.068 1194.6H901.472ZM901.472 1193.84H902.918C903.337 1193.84 903.671 1193.73 903.92 1193.52C904.173 1193.31 904.299 1193.03 904.299 1192.67C904.299 1192.27 904.183 1191.98 903.95 1191.8C903.718 1191.62 903.363 1191.53 902.888 1191.53H901.472V1193.84ZM910.065 1197.47C909.706 1197.89 909.179 1198.1 908.484 1198.1C907.909 1198.1 907.47 1197.93 907.167 1197.6C906.868 1197.26 906.717 1196.77 906.713 1196.11V1192.6H907.636V1196.09C907.636 1196.91 907.968 1197.32 908.633 1197.32C909.338 1197.32 909.807 1197.05 910.04 1196.53V1192.6H910.962V1198H910.085L910.065 1197.47ZM913.371 1198H912.449V1192.6H913.371V1198ZM912.374 1191.17C912.374 1191.02 912.419 1190.9 912.508 1190.79C912.602 1190.69 912.738 1190.64 912.917 1190.64C913.097 1190.64 913.233 1190.69 913.326 1190.79C913.419 1190.9 913.466 1191.02 913.466 1191.17C913.466 1191.32 913.419 1191.45 913.326 1191.55C913.233 1191.65 913.097 1191.7 912.917 1191.7C912.738 1191.7 912.602 1191.65 912.508 1191.55C912.419 1191.45 912.374 1191.32 912.374 1191.17ZM915.855 1198H914.932V1190.34H915.855V1198ZM917.112 1195.26C917.112 1194.43 917.308 1193.76 917.7 1193.26C918.093 1192.76 918.606 1192.5 919.241 1192.5C919.873 1192.5 920.373 1192.72 920.743 1193.15V1190.34H921.665V1198H920.817L920.772 1197.42C920.403 1197.87 919.89 1198.1 919.231 1198.1C918.606 1198.1 918.096 1197.84 917.7 1197.33C917.308 1196.82 917.112 1196.15 917.112 1195.33V1195.26ZM918.034 1195.36C918.034 1195.97 918.161 1196.45 918.413 1196.8C918.666 1197.14 919.015 1197.32 919.461 1197.32C920.046 1197.32 920.473 1197.05 920.743 1196.53V1194.05C920.467 1193.54 920.043 1193.29 919.471 1193.29C919.019 1193.29 918.666 1193.46 918.413 1193.81C918.161 1194.16 918.034 1194.68 918.034 1195.36ZM924.104 1198H923.181V1192.6H924.104V1198ZM923.107 1191.17C923.107 1191.02 923.151 1190.9 923.241 1190.79C923.334 1190.69 923.471 1190.64 923.65 1190.64C923.83 1190.64 923.966 1190.69 924.059 1190.79C924.152 1190.9 924.199 1191.02 924.199 1191.17C924.199 1191.32 924.152 1191.45 924.059 1191.55C923.966 1191.65 923.83 1191.7 923.65 1191.7C923.471 1191.7 923.334 1191.65 923.241 1191.55C923.151 1191.45 923.107 1191.32 923.107 1191.17ZM926.458 1192.6L926.488 1193.28C926.9 1192.76 927.439 1192.5 928.104 1192.5C929.244 1192.5 929.819 1193.15 929.829 1194.43V1198H928.907V1194.43C928.903 1194.04 928.814 1193.75 928.637 1193.57C928.465 1193.38 928.194 1193.29 927.825 1193.29C927.525 1193.29 927.263 1193.37 927.037 1193.53C926.81 1193.69 926.634 1193.9 926.508 1194.15V1198H925.585V1192.6H926.458ZM931.001 1195.26C931.001 1194.42 931.196 1193.75 931.585 1193.25C931.974 1192.75 932.489 1192.5 933.131 1192.5C933.789 1192.5 934.303 1192.74 934.672 1193.2L934.717 1192.6H935.56V1197.87C935.56 1198.57 935.352 1199.12 934.936 1199.52C934.524 1199.92 933.969 1200.12 933.271 1200.12C932.882 1200.12 932.501 1200.04 932.129 1199.87C931.756 1199.71 931.472 1199.48 931.276 1199.19L931.755 1198.64C932.15 1199.13 932.634 1199.37 933.206 1199.37C933.655 1199.37 934.004 1199.24 934.253 1198.99C934.506 1198.74 934.632 1198.38 934.632 1197.92V1197.46C934.263 1197.89 933.759 1198.1 933.121 1198.1C932.489 1198.1 931.977 1197.85 931.585 1197.34C931.196 1196.83 931.001 1196.13 931.001 1195.26ZM931.929 1195.36C931.929 1195.97 932.054 1196.45 932.303 1196.8C932.552 1197.14 932.902 1197.32 933.35 1197.32C933.932 1197.32 934.36 1197.05 934.632 1196.52V1194.06C934.35 1193.54 933.926 1193.29 933.36 1193.29C932.912 1193.29 932.561 1193.46 932.308 1193.81C932.055 1194.16 931.929 1194.68 931.929 1195.36Z"
            fill={textColor}
          />
        </g>

        <g
          className="selectable"
          onClick={() => handleBuildingSelect("BLDG_6")}
        >
          <g filter="url(#filter3_d)">
          <path
            className="building"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M835.214 1103.08L875.848 1108.2L873.24 1128.6L891.956 1131.03L893.998 1115.11L894.77 1115.22L897.527 1118.8L896.06 1119.93L898.658 1123.3L899.124 1122.95L902.05 1125.07L904.548 1123.13L903.676 1121.99L905.109 1120.89L902.517 1117.51L901.643 1118.18L897.489 1112.8L897.525 1112.52L897.665 1111.32L934.941 1116.35L937.025 1100.81L837.26 1087.82L835.214 1103.08Z"
            fill={buildColor}
            stroke={buildStrokeColor}
            strokeWidth={buildStrokeWidth}
          />
          </g>
          <g filter="url(#filter4_d)">
          <rect
            className="marker"
            x="851.001"
            y="1071"
            width="74"
            height="26"
            rx="3"
            fill="white"
          />
          </g>
          <g filter="url(#filter5_d)">
          <path
            className="arrow"
            d="M888.197 1103.38C887.809 1103.75 887.193 1103.75 886.805 1103.38L878.447 1095.27C877.802 1094.64 878.245 1093.55 879.143 1093.55L895.859 1093.55C896.757 1093.55 897.2 1094.64 896.555 1095.27L888.197 1103.38Z"
            fill="white"
          />
          </g>
          <path
            d="M870.979 1079.74L873.353 1085.66L875.727 1079.74H876.969V1087H876.011V1084.17L876.101 1081.12L873.717 1087H872.984L870.605 1081.13L870.7 1084.17V1087H869.742V1079.74H870.979ZM880.754 1087.1C880.023 1087.1 879.428 1086.86 878.969 1086.38C878.51 1085.9 878.281 1085.26 878.281 1084.45V1084.28C878.281 1083.75 878.382 1083.27 878.585 1082.85C878.791 1082.43 879.077 1082.1 879.443 1081.86C879.812 1081.62 880.211 1081.5 880.64 1081.5C881.341 1081.5 881.887 1081.74 882.276 1082.2C882.665 1082.66 882.859 1083.32 882.859 1084.18V1084.57H879.203C879.217 1085.1 879.371 1085.53 879.667 1085.86C879.966 1086.18 880.345 1086.35 880.804 1086.35C881.13 1086.35 881.406 1086.28 881.632 1086.15C881.858 1086.01 882.056 1085.84 882.226 1085.62L882.789 1086.06C882.337 1086.75 881.659 1087.1 880.754 1087.1ZM880.64 1082.26C880.267 1082.26 879.955 1082.4 879.702 1082.67C879.449 1082.94 879.293 1083.32 879.233 1083.81H881.936V1083.74C881.91 1083.27 881.783 1082.91 881.557 1082.65C881.331 1082.39 881.025 1082.26 880.64 1082.26ZM884.804 1081.6L884.834 1082.28C885.246 1081.76 885.785 1081.5 886.45 1081.5C887.59 1081.5 888.166 1082.15 888.176 1083.43V1087H887.253V1083.43C887.25 1083.04 887.16 1082.75 886.984 1082.57C886.811 1082.38 886.54 1082.29 886.171 1082.29C885.871 1082.29 885.609 1082.37 885.383 1082.53C885.157 1082.69 884.98 1082.9 884.854 1083.15V1087H883.931V1081.6H884.804ZM890.435 1086.25H893.592V1087H889.308V1086.32L892.285 1082.37H889.353V1081.6H893.442V1082.26L890.435 1086.25ZM895.637 1087H894.714V1081.6H895.637V1087ZM894.639 1080.17C894.639 1080.02 894.684 1079.9 894.774 1079.79C894.867 1079.69 895.003 1079.64 895.183 1079.64C895.362 1079.64 895.499 1079.69 895.592 1079.79C895.685 1079.9 895.731 1080.02 895.731 1080.17C895.731 1080.32 895.685 1080.45 895.592 1080.55C895.499 1080.65 895.362 1080.7 895.183 1080.7C895.003 1080.7 894.867 1080.65 894.774 1080.55C894.684 1080.45 894.639 1080.32 894.639 1080.17ZM899.357 1087.1C898.626 1087.1 898.03 1086.86 897.572 1086.38C897.113 1085.9 896.883 1085.26 896.883 1084.45V1084.28C896.883 1083.75 896.985 1083.27 897.188 1082.85C897.394 1082.43 897.68 1082.1 898.045 1081.86C898.414 1081.62 898.813 1081.5 899.242 1081.5C899.944 1081.5 900.489 1081.74 900.878 1082.2C901.267 1082.66 901.462 1083.32 901.462 1084.18V1084.57H897.806C897.819 1085.1 897.974 1085.53 898.27 1085.86C898.569 1086.18 898.948 1086.35 899.407 1086.35C899.733 1086.35 900.009 1086.28 900.235 1086.15C900.461 1086.01 900.659 1085.84 900.828 1085.62L901.392 1086.06C900.94 1086.75 900.261 1087.1 899.357 1087.1ZM899.242 1082.26C898.87 1082.26 898.557 1082.4 898.305 1082.67C898.052 1082.94 897.896 1083.32 897.836 1083.81H900.539V1083.74C900.512 1083.27 900.386 1082.91 900.16 1082.65C899.934 1082.39 899.628 1082.26 899.242 1082.26ZM905.676 1085.57C905.676 1085.32 905.581 1085.13 905.392 1084.99C905.206 1084.85 904.878 1084.73 904.409 1084.63C903.944 1084.53 903.573 1084.41 903.297 1084.27C903.024 1084.13 902.822 1083.97 902.689 1083.77C902.559 1083.58 902.494 1083.35 902.494 1083.08C902.494 1082.64 902.68 1082.27 903.053 1081.96C903.428 1081.66 903.907 1081.5 904.489 1081.5C905.101 1081.5 905.596 1081.66 905.975 1081.98C906.358 1082.29 906.549 1082.7 906.549 1083.19H905.621C905.621 1082.94 905.513 1082.72 905.297 1082.54C905.084 1082.35 904.815 1082.26 904.489 1082.26C904.153 1082.26 903.891 1082.34 903.701 1082.48C903.512 1082.63 903.417 1082.82 903.417 1083.06C903.417 1083.28 903.505 1083.45 903.681 1083.56C903.857 1083.67 904.175 1083.78 904.634 1083.88C905.096 1083.99 905.47 1084.11 905.756 1084.25C906.042 1084.39 906.253 1084.57 906.389 1084.77C906.529 1084.97 906.599 1085.21 906.599 1085.5C906.599 1085.99 906.406 1086.37 906.02 1086.67C905.634 1086.96 905.134 1087.1 904.519 1087.1C904.087 1087.1 903.704 1087.02 903.372 1086.87C903.039 1086.72 902.778 1086.5 902.589 1086.23C902.403 1085.96 902.31 1085.66 902.31 1085.34H903.232C903.249 1085.65 903.372 1085.89 903.601 1086.08C903.834 1086.26 904.14 1086.35 904.519 1086.35C904.868 1086.35 905.147 1086.28 905.357 1086.14C905.57 1085.99 905.676 1085.8 905.676 1085.57Z"
            fill={textColor}
          />
        </g>

        <g
          className="selectable"
          onClick={() => handleBuildingSelect("BLDG_7")}
        >
          <g filter="url(#filter6_d)">
          <path
            className="building"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M826.235 1153.15L858.913 1157.58L863.557 1122.5L830.873 1118.57L826.235 1153.15Z"
            fill={buildColor}
            stroke={buildStrokeColor}
            strokeWidth={buildStrokeWidth}
          />
          </g>
          <g filter="url(#filter7_d)">
          <rect
            className="marker"
            x="801"
            y="1113"
            width="90"
            height="24"
            rx="3"
            fill="white"
          />
          </g>
          <g filter="url(#filter8_d)">
          <path
            className="arrow"
            d="M845.422 1143.19C845.034 1143.56 844.417 1143.56 844.029 1143.19L835.671 1135.08C835.027 1134.45 835.469 1133.36 836.368 1133.36L853.084 1133.36C853.982 1133.36 854.425 1134.45 853.78 1135.08L845.422 1143.19Z"
            fill="white"
          />
          </g>
          <path
            d="M818.879 1128.22H822.32V1129H817.916V1121.74H818.879V1128.22ZM826.599 1129C826.546 1128.89 826.503 1128.7 826.47 1128.43C826.041 1128.88 825.529 1129.1 824.934 1129.1C824.402 1129.1 823.964 1128.95 823.622 1128.65C823.283 1128.35 823.113 1127.97 823.113 1127.5C823.113 1126.94 823.326 1126.51 823.752 1126.2C824.181 1125.89 824.782 1125.73 825.557 1125.73H826.455V1125.3C826.455 1124.98 826.358 1124.73 826.165 1124.54C825.973 1124.34 825.688 1124.25 825.313 1124.25C824.983 1124.25 824.708 1124.33 824.485 1124.5C824.262 1124.66 824.151 1124.86 824.151 1125.1H823.223C823.223 1124.83 823.318 1124.57 823.507 1124.32C823.7 1124.07 823.959 1123.87 824.285 1123.72C824.614 1123.58 824.975 1123.5 825.367 1123.5C825.989 1123.5 826.476 1123.66 826.829 1123.97C827.181 1124.28 827.364 1124.71 827.377 1125.26V1127.74C827.377 1128.23 827.441 1128.63 827.567 1128.92V1129H826.599ZM825.068 1128.3C825.358 1128.3 825.632 1128.22 825.891 1128.07C826.151 1127.92 826.338 1127.73 826.455 1127.49V1126.38H825.732C824.601 1126.38 824.036 1126.71 824.036 1127.37C824.036 1127.66 824.132 1127.89 824.325 1128.05C824.518 1128.22 824.766 1128.3 825.068 1128.3ZM833.602 1127.73L834.639 1123.6H835.562L833.991 1129H833.242L831.931 1124.91L830.654 1129H829.906L828.34 1123.6H829.258L830.32 1127.64L831.577 1123.6H832.32L833.602 1127.73ZM839.182 1129V1121.74H841.556C842.344 1121.74 842.936 1121.9 843.332 1122.23C843.731 1122.55 843.93 1123.04 843.93 1123.67C843.93 1124.01 843.834 1124.31 843.641 1124.58C843.448 1124.84 843.185 1125.04 842.853 1125.18C843.245 1125.29 843.555 1125.5 843.781 1125.81C844.01 1126.11 844.125 1126.48 844.125 1126.91C844.125 1127.56 843.914 1128.07 843.491 1128.44C843.069 1128.81 842.472 1129 841.701 1129H839.182ZM840.14 1125.6V1128.22H841.721C842.166 1128.22 842.517 1128.1 842.773 1127.87C843.033 1127.64 843.162 1127.32 843.162 1126.92C843.162 1126.04 842.687 1125.6 841.736 1125.6H840.14ZM840.14 1124.84H841.586C842.005 1124.84 842.339 1124.73 842.589 1124.52C842.841 1124.31 842.968 1124.03 842.968 1123.67C842.968 1123.27 842.851 1122.98 842.619 1122.8C842.386 1122.62 842.032 1122.53 841.556 1122.53H840.14V1124.84ZM848.733 1128.47C848.374 1128.89 847.847 1129.1 847.152 1129.1C846.577 1129.1 846.138 1128.93 845.835 1128.6C845.536 1128.27 845.385 1127.77 845.382 1127.12V1123.6H846.304V1127.09C846.304 1127.91 846.637 1128.32 847.302 1128.32C848.007 1128.32 848.475 1128.05 848.708 1127.53V1123.6H849.631V1129H848.753L848.733 1128.47ZM852.04 1129H851.117V1123.6H852.04V1129ZM851.042 1122.17C851.042 1122.02 851.087 1121.9 851.177 1121.79C851.27 1121.69 851.406 1121.64 851.586 1121.64C851.765 1121.64 851.902 1121.69 851.995 1121.79C852.088 1121.9 852.134 1122.02 852.134 1122.17C852.134 1122.32 852.088 1122.45 851.995 1122.55C851.902 1122.65 851.765 1122.7 851.586 1122.7C851.406 1122.7 851.27 1122.65 851.177 1122.55C851.087 1122.45 851.042 1122.32 851.042 1122.17ZM854.523 1129H853.601V1121.34H854.523V1129ZM855.78 1126.26C855.78 1125.43 855.976 1124.76 856.369 1124.26C856.761 1123.76 857.275 1123.5 857.91 1123.5C858.541 1123.5 859.042 1123.72 859.411 1124.15V1121.34H860.334V1129H859.486L859.441 1128.42C859.072 1128.87 858.558 1129.1 857.9 1129.1C857.275 1129.1 856.764 1128.84 856.369 1128.33C855.976 1127.82 855.78 1127.15 855.78 1126.33V1126.26ZM856.703 1126.36C856.703 1126.97 856.829 1127.45 857.082 1127.8C857.334 1128.14 857.684 1128.32 858.129 1128.32C858.714 1128.32 859.142 1128.05 859.411 1127.53V1125.05C859.135 1124.54 858.711 1124.29 858.139 1124.29C857.687 1124.29 857.334 1124.46 857.082 1124.81C856.829 1125.16 856.703 1125.68 856.703 1126.36ZM862.772 1129H861.85V1123.6H862.772V1129ZM861.775 1122.17C861.775 1122.02 861.82 1121.9 861.91 1121.79C862.003 1121.69 862.139 1121.64 862.318 1121.64C862.498 1121.64 862.634 1121.69 862.727 1121.79C862.821 1121.9 862.867 1122.02 862.867 1122.17C862.867 1122.32 862.821 1122.45 862.727 1122.55C862.634 1122.65 862.498 1122.7 862.318 1122.7C862.139 1122.7 862.003 1122.65 861.91 1122.55C861.82 1122.45 861.775 1122.32 861.775 1122.17ZM865.126 1123.6L865.156 1124.28C865.569 1123.76 866.107 1123.5 866.772 1123.5C867.913 1123.5 868.488 1124.15 868.498 1125.43V1129H867.575V1125.43C867.572 1125.04 867.482 1124.75 867.306 1124.57C867.133 1124.38 866.862 1124.29 866.493 1124.29C866.194 1124.29 865.931 1124.37 865.705 1124.53C865.479 1124.69 865.303 1124.9 865.176 1125.16V1129H864.254V1123.6H865.126ZM869.67 1126.26C869.67 1125.42 869.864 1124.75 870.253 1124.25C870.642 1123.75 871.158 1123.5 871.799 1123.5C872.458 1123.5 872.971 1123.74 873.34 1124.2L873.385 1123.6H874.228V1128.87C874.228 1129.57 874.02 1130.12 873.605 1130.52C873.192 1130.92 872.637 1131.13 871.939 1131.13C871.55 1131.13 871.169 1131.04 870.797 1130.88C870.425 1130.71 870.14 1130.48 869.944 1130.19L870.423 1129.64C870.819 1130.13 871.302 1130.37 871.874 1130.37C872.323 1130.37 872.672 1130.25 872.922 1129.99C873.174 1129.74 873.301 1129.38 873.301 1128.93V1128.46C872.931 1128.89 872.428 1129.1 871.789 1129.1C871.158 1129.1 870.646 1128.85 870.253 1128.34C869.864 1127.83 869.67 1127.14 869.67 1126.26ZM870.597 1126.36C870.597 1126.97 870.722 1127.45 870.971 1127.8C871.221 1128.14 871.57 1128.32 872.019 1128.32C872.601 1128.32 873.028 1128.05 873.301 1127.52V1125.06C873.018 1124.55 872.594 1124.29 872.029 1124.29C871.58 1124.29 871.229 1124.46 870.976 1124.81C870.724 1125.16 870.597 1125.68 870.597 1126.36Z"
            fill={textColor}
          />
        </g>

        <g
          className="selectable"
          onClick={() => handleBuildingSelect("BLDG_5")}
        >
          <g filter="url(#filter9_d)">
          <path
            className="building"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M837 1060.81L837.838 1060.79L853.817 1060.53L854.664 1052.64L862.798 1053.87L860.908 1062.12L884.783 1064.7L884.663 1062.5L899.982 1062.4L899.804 1065.33L909.205 1066L909.166 1063.79L913.541 1063.5L913.237 1062.23L921.984 1062.08L915.26 1057.19L941.041 1060.47L945.184 1025.94L915.054 1022.19L905.01 1020.75L907.414 1002.19L886.063 999.418L883.523 1018.18L874.31 1016.63L874.393 1010.73L868.557 1009.02L867.966 1014.68L867.822 1016.04L855.434 1014.36L852.505 1037.28L849.508 1036.69L850.964 1023.49L836.809 1023.87L837 1060.81Z"
            fill={buildColor}
            stroke={buildStrokeColor}
            strokeWidth={buildStrokeWidth}
          />
          </g>
          <g filter="url(#filter10_d)">
          <rect
            className="marker"
            x="852.001"
            y="1011"
            width="69"
            height="31"
            rx="3"
            fill="white"
          />
          </g>
          <g filter="url(#filter11_d)">
          <path
            className="arrow"
            d="M887.421 1048.38C887.033 1048.75 886.417 1048.75 886.029 1048.38L877.671 1040.27C877.026 1039.64 877.469 1038.55 878.367 1038.55L895.083 1038.55C895.981 1038.55 896.424 1039.64 895.779 1040.27L887.421 1048.38Z"
            fill="white"
          />
          </g>
          <path
            d="M873.784 1021.7C873.694 1022.46 873.41 1023.06 872.931 1023.48C872.456 1023.89 871.822 1024.1 871.031 1024.1C870.173 1024.1 869.485 1023.79 868.966 1023.18C868.451 1022.56 868.193 1021.74 868.193 1020.71V1020.01C868.193 1019.33 868.313 1018.74 868.552 1018.23C868.795 1017.72 869.137 1017.33 869.58 1017.05C870.022 1016.78 870.534 1016.64 871.116 1016.64C871.887 1016.64 872.505 1016.85 872.971 1017.29C873.436 1017.72 873.707 1018.31 873.784 1019.07H872.821C872.738 1018.49 872.557 1018.07 872.278 1017.82C872.002 1017.56 871.614 1017.43 871.116 1017.43C870.504 1017.43 870.023 1017.65 869.674 1018.1C869.328 1018.56 869.156 1019.2 869.156 1020.03V1020.74C869.156 1021.53 869.32 1022.15 869.649 1022.62C869.979 1023.08 870.439 1023.32 871.031 1023.32C871.563 1023.32 871.97 1023.2 872.253 1022.96C872.539 1022.71 872.728 1022.29 872.821 1021.7H873.784ZM878.282 1024C878.229 1023.89 878.186 1023.7 878.153 1023.43C877.724 1023.88 877.212 1024.1 876.617 1024.1C876.085 1024.1 875.647 1023.95 875.305 1023.65C874.966 1023.35 874.796 1022.97 874.796 1022.5C874.796 1021.94 875.009 1021.51 875.435 1021.2C875.864 1020.88 876.465 1020.73 877.24 1020.73H878.138V1020.3C878.138 1019.98 878.041 1019.73 877.848 1019.54C877.656 1019.34 877.371 1019.25 876.996 1019.25C876.666 1019.25 876.391 1019.33 876.168 1019.5C875.945 1019.66 875.834 1019.86 875.834 1020.1H874.906C874.906 1019.83 875.001 1019.57 875.19 1019.32C875.383 1019.07 875.642 1018.87 875.968 1018.72C876.297 1018.58 876.658 1018.5 877.051 1018.5C877.672 1018.5 878.159 1018.66 878.512 1018.97C878.864 1019.28 879.047 1019.71 879.06 1020.25V1022.74C879.06 1023.23 879.124 1023.63 879.25 1023.92V1024H878.282ZM876.751 1023.3C877.041 1023.3 877.315 1023.22 877.574 1023.07C877.834 1022.92 878.021 1022.73 878.138 1022.49V1021.38H877.415C876.284 1021.38 875.719 1021.71 875.719 1022.37C875.719 1022.66 875.815 1022.89 876.008 1023.05C876.201 1023.22 876.449 1023.3 876.751 1023.3ZM881.375 1018.6L881.399 1019.2C881.795 1018.74 882.329 1018.5 883 1018.5C883.755 1018.5 884.269 1018.79 884.541 1019.37C884.721 1019.11 884.954 1018.9 885.24 1018.74C885.529 1018.58 885.87 1018.5 886.262 1018.5C887.446 1018.5 888.048 1019.13 888.067 1020.38V1024H887.145V1020.44C887.145 1020.05 887.057 1019.77 886.881 1019.58C886.704 1019.38 886.408 1019.29 885.993 1019.29C885.65 1019.29 885.366 1019.39 885.14 1019.6C884.914 1019.8 884.783 1020.07 884.746 1020.42V1024H883.818V1020.46C883.818 1019.68 883.434 1019.29 882.666 1019.29C882.061 1019.29 881.647 1019.54 881.424 1020.06V1024H880.502V1018.6H881.375ZM894.022 1021.36C894.022 1022.18 893.834 1022.84 893.459 1023.35C893.083 1023.85 892.574 1024.1 891.933 1024.1C891.278 1024.1 890.762 1023.89 890.387 1023.48V1026.07H889.464V1018.6H890.307L890.352 1019.2C890.727 1018.74 891.249 1018.5 891.918 1018.5C892.566 1018.5 893.078 1018.75 893.454 1019.24C893.833 1019.73 894.022 1020.41 894.022 1021.28V1021.36ZM893.1 1021.26C893.1 1020.65 892.97 1020.17 892.711 1019.82C892.451 1019.46 892.096 1019.29 891.643 1019.29C891.085 1019.29 890.666 1019.53 890.387 1020.03V1022.61C890.663 1023.1 891.085 1023.35 891.653 1023.35C892.096 1023.35 892.446 1023.17 892.706 1022.82C892.968 1022.47 893.1 1021.95 893.1 1021.26ZM898.531 1023.47C898.172 1023.89 897.645 1024.1 896.95 1024.1C896.375 1024.1 895.936 1023.93 895.633 1023.6C895.334 1023.26 895.183 1022.77 895.179 1022.11V1018.6H896.102V1022.09C896.102 1022.91 896.435 1023.32 897.099 1023.32C897.804 1023.32 898.273 1023.05 898.506 1022.53V1018.6H899.429V1024H898.551L898.531 1023.47ZM903.977 1022.57C903.977 1022.32 903.882 1022.13 903.693 1021.99C903.507 1021.85 903.179 1021.73 902.71 1021.63C902.245 1021.53 901.874 1021.41 901.598 1021.27C901.325 1021.13 901.123 1020.97 900.99 1020.77C900.86 1020.58 900.795 1020.35 900.795 1020.08C900.795 1019.64 900.981 1019.27 901.354 1018.96C901.729 1018.66 902.208 1018.5 902.79 1018.5C903.402 1018.5 903.897 1018.66 904.276 1018.98C904.659 1019.29 904.85 1019.7 904.85 1020.19H903.922C903.922 1019.94 903.814 1019.72 903.598 1019.54C903.385 1019.35 903.116 1019.26 902.79 1019.26C902.454 1019.26 902.192 1019.33 902.002 1019.48C901.813 1019.63 901.718 1019.82 901.718 1020.05C901.718 1020.28 901.806 1020.45 901.982 1020.56C902.158 1020.67 902.476 1020.78 902.935 1020.88C903.397 1020.99 903.771 1021.11 904.057 1021.25C904.343 1021.39 904.554 1021.57 904.69 1021.77C904.83 1021.97 904.9 1022.21 904.9 1022.5C904.9 1022.99 904.707 1023.37 904.321 1023.67C903.935 1023.95 903.435 1024.1 902.82 1024.1C902.388 1024.1 902.005 1024.02 901.673 1023.87C901.34 1023.72 901.079 1023.5 900.89 1023.23C900.704 1022.96 900.611 1022.66 900.611 1022.34H901.533C901.55 1022.65 901.673 1022.89 901.902 1023.08C902.135 1023.26 902.441 1023.35 902.82 1023.35C903.169 1023.35 903.448 1023.28 903.658 1023.14C903.871 1022.99 903.977 1022.8 903.977 1022.57ZM877.774 1033.7C877.684 1034.46 877.4 1035.06 876.921 1035.48C876.445 1035.89 875.812 1036.1 875.021 1036.1C874.163 1036.1 873.475 1035.79 872.956 1035.18C872.441 1034.56 872.183 1033.74 872.183 1032.71V1032.01C872.183 1031.33 872.303 1030.74 872.542 1030.23C872.785 1029.72 873.127 1029.33 873.569 1029.05C874.012 1028.78 874.524 1028.64 875.105 1028.64C875.877 1028.64 876.495 1028.85 876.961 1029.29C877.426 1029.72 877.697 1030.31 877.774 1031.07H876.811C876.728 1030.49 876.547 1030.07 876.268 1029.82C875.992 1029.56 875.604 1029.43 875.105 1029.43C874.494 1029.43 874.013 1029.65 873.664 1030.1C873.318 1030.56 873.145 1031.2 873.145 1032.03V1032.74C873.145 1033.53 873.31 1034.15 873.639 1034.62C873.968 1035.08 874.429 1035.32 875.021 1035.32C875.553 1035.32 875.96 1035.2 876.243 1034.96C876.529 1034.71 876.718 1034.29 876.811 1033.7H877.774ZM881.18 1036.1C880.449 1036.1 879.853 1035.86 879.395 1035.38C878.936 1034.9 878.706 1034.26 878.706 1033.45V1033.28C878.706 1032.75 878.808 1032.27 879.011 1031.85C879.217 1031.43 879.503 1031.1 879.868 1030.86C880.237 1030.62 880.636 1030.5 881.065 1030.5C881.767 1030.5 882.312 1030.73 882.701 1031.2C883.09 1031.66 883.285 1032.32 883.285 1033.18V1033.57H879.629C879.642 1034.1 879.797 1034.53 880.093 1034.86C880.392 1035.18 880.771 1035.35 881.23 1035.35C881.556 1035.35 881.832 1035.28 882.058 1035.15C882.284 1035.01 882.482 1034.84 882.651 1034.62L883.215 1035.06C882.763 1035.75 882.084 1036.1 881.18 1036.1ZM881.065 1031.26C880.693 1031.26 880.38 1031.4 880.128 1031.67C879.875 1031.94 879.719 1032.32 879.659 1032.81H882.362V1032.74C882.335 1032.27 882.209 1031.91 881.983 1031.65C881.757 1031.39 881.451 1031.26 881.065 1031.26ZM885.23 1030.6L885.26 1031.28C885.672 1030.76 886.211 1030.5 886.876 1030.5C888.016 1030.5 888.591 1031.15 888.601 1032.43V1036H887.678V1032.43C887.675 1032.04 887.585 1031.75 887.409 1031.57C887.236 1031.38 886.965 1031.29 886.596 1031.29C886.297 1031.29 886.034 1031.37 885.808 1031.53C885.582 1031.69 885.406 1031.9 885.28 1032.15V1036H884.357V1030.6H885.23ZM891.244 1029.3V1030.6H892.252V1031.32H891.244V1034.66C891.244 1034.88 891.289 1035.04 891.379 1035.15C891.469 1035.26 891.622 1035.31 891.838 1035.31C891.944 1035.31 892.091 1035.29 892.277 1035.25V1036C892.034 1036.07 891.798 1036.1 891.569 1036.1C891.156 1036.1 890.845 1035.97 890.636 1035.73C890.426 1035.48 890.322 1035.12 890.322 1034.66V1031.32H889.339V1030.6H890.322V1029.3H891.244ZM895.942 1031.43C895.803 1031.41 895.652 1031.4 895.489 1031.4C894.883 1031.4 894.473 1031.65 894.257 1032.17V1036H893.334V1030.6H894.232L894.247 1031.23C894.549 1030.74 894.978 1030.5 895.533 1030.5C895.713 1030.5 895.849 1030.53 895.942 1030.57V1031.43ZM898.935 1036.1C898.203 1036.1 897.608 1035.86 897.149 1035.38C896.691 1034.9 896.461 1034.26 896.461 1033.45V1033.28C896.461 1032.75 896.563 1032.27 896.765 1031.85C896.971 1031.43 897.257 1031.1 897.623 1030.86C897.992 1030.62 898.391 1030.5 898.82 1030.5C899.522 1030.5 900.067 1030.73 900.456 1031.2C900.845 1031.66 901.039 1032.32 901.039 1033.18V1033.57H897.384C897.397 1034.1 897.552 1034.53 897.848 1034.86C898.147 1035.18 898.526 1035.35 898.985 1035.35C899.311 1035.35 899.587 1035.28 899.813 1035.15C900.039 1035.01 900.237 1034.84 900.406 1034.62L900.97 1035.06C900.517 1035.75 899.839 1036.1 898.935 1036.1ZM898.82 1031.26C898.448 1031.26 898.135 1031.4 897.883 1031.67C897.63 1031.94 897.474 1032.32 897.414 1032.81H900.117V1032.74C900.09 1032.27 899.964 1031.91 899.738 1031.65C899.512 1031.39 899.206 1031.26 898.82 1031.26Z"
            fill={textColor}
          />
        </g>

        <g
          className="selectable"
          onClick={() => handleBuildingSelect("BLDG_9")}
        >
          <g filter="url(#filter12_d)">
          <path
            className="building"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M972.613 1137.7L981.274 1138.81L980.799 1142.49L985.153 1143.05L985.624 1139.36L1004.32 1141.76L1006.69 1123.31L1000.73 1122.55L1001.7 1115L1018.04 1117.09L1020.54 1097.65L973.506 1091.61L970.466 1115.26L969.948 1119.38L974.879 1120.02L972.613 1137.7Z"
            fill={buildColor}
            stroke={buildStrokeColor}
            strokeWidth={buildStrokeWidth}
          />
          </g>
          <g filter="url(#filter13_d)">
          <rect
            className="marker"
            x="954.001"
            y="1089"
            width="68"
            height="31"
            rx="3"
            fill="white"
          />
          </g>
          <g filter="url(#filter14_d)">
          <path
            className="arrow"
            d="M989.421 1126.38C989.033 1126.75 988.417 1126.75 988.029 1126.38L979.671 1118.27C979.026 1117.64 979.469 1116.55 980.367 1116.55L997.083 1116.55C997.981 1116.55 998.424 1117.64 997.779 1118.27L989.421 1126.38Z"
            fill="white"
          />
          </g>
          <path
            d="M967.866 1094.39L970.24 1100.31L972.614 1094.39H973.855V1101.65H972.898V1098.82L972.988 1095.77L970.604 1101.65H969.871L967.492 1095.78L967.586 1098.82V1101.65H966.629V1094.39H967.866ZM978.733 1101.65C978.68 1101.54 978.637 1101.35 978.603 1101.08C978.174 1101.53 977.662 1101.75 977.067 1101.75C976.535 1101.75 976.098 1101.6 975.756 1101.3C975.416 1101 975.247 1100.61 975.247 1100.15C975.247 1099.59 975.46 1099.15 975.885 1098.85C976.314 1098.53 976.916 1098.38 977.691 1098.38H978.588V1097.95C978.588 1097.63 978.492 1097.37 978.299 1097.18C978.106 1096.99 977.822 1096.9 977.446 1096.9C977.117 1096.9 976.841 1096.98 976.618 1097.14C976.396 1097.31 976.284 1097.51 976.284 1097.75H975.357C975.357 1097.48 975.451 1097.22 975.641 1096.97C975.834 1096.72 976.093 1096.52 976.419 1096.37C976.748 1096.23 977.109 1096.15 977.501 1096.15C978.123 1096.15 978.61 1096.31 978.962 1096.62C979.315 1096.93 979.498 1097.36 979.511 1097.9V1100.39C979.511 1100.88 979.574 1101.28 979.701 1101.57V1101.65H978.733ZM977.202 1100.95C977.491 1100.95 977.765 1100.87 978.025 1100.72C978.284 1100.57 978.472 1100.38 978.588 1100.14V1099.03H977.865C976.735 1099.03 976.169 1099.36 976.169 1100.02C976.169 1100.31 976.266 1100.54 976.459 1100.7C976.652 1100.86 976.899 1100.95 977.202 1100.95ZM982.209 1094.95V1096.25H983.217V1096.97H982.209V1100.31C982.209 1100.53 982.254 1100.69 982.344 1100.8C982.434 1100.91 982.586 1100.96 982.803 1100.96C982.909 1100.96 983.055 1100.94 983.241 1100.9V1101.65C982.999 1101.71 982.763 1101.75 982.533 1101.75C982.121 1101.75 981.81 1101.62 981.601 1101.37C981.391 1101.12 981.286 1100.77 981.286 1100.31V1096.97H980.304V1096.25H981.286V1094.95H982.209ZM985.221 1096.91C985.63 1096.4 986.162 1096.15 986.817 1096.15C987.958 1096.15 988.533 1096.8 988.543 1098.08V1101.65H987.62V1098.08C987.617 1097.69 987.527 1097.4 987.351 1097.21C987.178 1097.03 986.907 1096.94 986.538 1096.94C986.239 1096.94 985.976 1097.02 985.75 1097.17C985.524 1097.33 985.348 1097.54 985.221 1097.8V1101.65H984.299V1093.99H985.221V1096.91ZM992.164 1101.75C991.432 1101.75 990.837 1101.51 990.378 1101.03C989.919 1100.55 989.69 1099.9 989.69 1099.1V1098.93C989.69 1098.4 989.791 1097.92 989.994 1097.5C990.2 1097.08 990.486 1096.75 990.852 1096.51C991.221 1096.27 991.62 1096.15 992.049 1096.15C992.751 1096.15 993.296 1096.38 993.685 1096.85C994.074 1097.31 994.268 1097.97 994.268 1098.83V1099.21H990.613C990.626 1099.75 990.781 1100.18 991.077 1100.51C991.376 1100.83 991.755 1101 992.214 1101C992.539 1101 992.815 1100.93 993.042 1100.8C993.268 1100.66 993.465 1100.49 993.635 1100.27L994.199 1100.71C993.746 1101.4 993.068 1101.75 992.164 1101.75ZM992.049 1096.91C991.677 1096.91 991.364 1097.05 991.111 1097.32C990.859 1097.59 990.703 1097.97 990.643 1098.46H993.346V1098.39C993.319 1097.92 993.193 1097.56 992.967 1097.3C992.741 1097.04 992.435 1096.91 992.049 1096.91ZM998.483 1100.22C998.483 1099.97 998.388 1099.77 998.198 1099.64C998.012 1099.5 997.685 1099.38 997.216 1099.28C996.75 1099.18 996.38 1099.06 996.104 1098.92C995.831 1098.78 995.628 1098.61 995.495 1098.42C995.366 1098.23 995.301 1098 995.301 1097.73C995.301 1097.29 995.487 1096.92 995.859 1096.61C996.235 1096.31 996.714 1096.15 997.296 1096.15C997.908 1096.15 998.403 1096.31 998.782 1096.63C999.164 1096.94 999.355 1097.35 999.355 1097.84H998.428C998.428 1097.59 998.32 1097.37 998.104 1097.18C997.891 1097 997.622 1096.91 997.296 1096.91C996.96 1096.91 996.697 1096.98 996.508 1097.13C996.318 1097.28 996.223 1097.47 996.223 1097.7C996.223 1097.93 996.312 1098.09 996.488 1098.21C996.664 1098.32 996.982 1098.43 997.44 1098.53C997.903 1098.63 998.277 1098.76 998.563 1098.9C998.848 1099.04 999.06 1099.22 999.196 1099.42C999.336 1099.62 999.405 1099.86 999.405 1100.15C999.405 1100.63 999.213 1101.02 998.827 1101.31C998.441 1101.6 997.941 1101.75 997.326 1101.75C996.893 1101.75 996.511 1101.67 996.179 1101.52C995.846 1101.37 995.585 1101.15 995.396 1100.88C995.209 1100.6 995.116 1100.31 995.116 1099.99H996.039C996.056 1100.3 996.179 1100.54 996.408 1100.73C996.641 1100.91 996.947 1101 997.326 1101C997.675 1101 997.954 1100.93 998.164 1100.79C998.376 1100.64 998.483 1100.45 998.483 1100.22ZM1000.36 1098.9C1000.36 1098.37 1000.47 1097.9 1000.67 1097.47C1000.88 1097.05 1001.17 1096.73 1001.54 1096.5C1001.91 1096.27 1002.34 1096.15 1002.81 1096.15C1003.55 1096.15 1004.14 1096.41 1004.59 1096.92C1005.05 1097.42 1005.28 1098.1 1005.28 1098.95V1099.01C1005.28 1099.54 1005.17 1100.01 1004.97 1100.43C1004.77 1100.84 1004.48 1101.17 1004.11 1101.4C1003.74 1101.63 1003.31 1101.75 1002.82 1101.75C1002.09 1101.75 1001.5 1101.49 1001.04 1100.99C1000.59 1100.48 1000.36 1099.8 1000.36 1098.97V1098.9ZM1001.29 1099.01C1001.29 1099.61 1001.43 1100.09 1001.7 1100.45C1001.98 1100.81 1002.36 1101 1002.82 1101C1003.29 1101 1003.66 1100.81 1003.94 1100.45C1004.21 1100.08 1004.35 1099.56 1004.35 1098.9C1004.35 1098.31 1004.21 1097.83 1003.93 1097.46C1003.65 1097.1 1003.28 1096.91 1002.81 1096.91C1002.36 1096.91 1001.99 1097.09 1001.71 1097.45C1001.43 1097.82 1001.29 1098.34 1001.29 1099.01ZM1007.31 1096.25L1007.34 1096.93C1007.75 1096.41 1008.29 1096.15 1008.95 1096.15C1010.09 1096.15 1010.67 1096.8 1010.68 1098.08V1101.65H1009.75V1098.08C1009.75 1097.69 1009.66 1097.4 1009.48 1097.21C1009.31 1097.03 1009.04 1096.94 1008.67 1096.94C1008.37 1096.94 1008.11 1097.02 1007.88 1097.17C1007.66 1097.33 1007.48 1097.54 1007.36 1097.8V1101.65H1006.43V1096.25H1007.31ZM974.923 1112.87H978.364V1113.65H973.96V1106.39H974.923V1112.87ZM980.314 1113.65H979.391V1108.25H980.314V1113.65ZM979.316 1106.82C979.316 1106.67 979.361 1106.54 979.451 1106.44C979.544 1106.34 979.681 1106.29 979.86 1106.29C980.04 1106.29 980.176 1106.34 980.269 1106.44C980.362 1106.54 980.409 1106.67 980.409 1106.82C980.409 1106.97 980.362 1107.1 980.269 1107.19C980.176 1107.29 980.04 1107.34 979.86 1107.34C979.681 1107.34 979.544 1107.29 979.451 1107.19C979.361 1107.1 979.316 1106.97 979.316 1106.82ZM986.364 1111.01C986.364 1111.83 986.174 1112.5 985.795 1113C985.416 1113.5 984.907 1113.75 984.269 1113.75C983.587 1113.75 983.06 1113.51 982.688 1113.03L982.643 1113.65H981.795V1105.99H982.718V1108.85C983.09 1108.38 983.604 1108.15 984.259 1108.15C984.914 1108.15 985.428 1108.4 985.8 1108.9C986.176 1109.39 986.364 1110.07 986.364 1110.93V1111.01ZM985.441 1110.91C985.441 1110.28 985.32 1109.79 985.077 1109.45C984.834 1109.11 984.485 1108.94 984.029 1108.94C983.421 1108.94 982.984 1109.22 982.718 1109.78V1112.12C983 1112.68 983.441 1112.97 984.039 1112.97C984.482 1112.97 984.826 1112.79 985.072 1112.45C985.318 1112.11 985.441 1111.59 985.441 1110.91ZM990.139 1109.08C989.999 1109.06 989.848 1109.05 989.685 1109.05C989.08 1109.05 988.669 1109.3 988.453 1109.82V1113.65H987.531V1108.25H988.428L988.443 1108.88C988.746 1108.39 989.175 1108.15 989.73 1108.15C989.91 1108.15 990.046 1108.18 990.139 1108.22V1109.08ZM994.124 1113.65C994.071 1113.54 994.027 1113.35 993.994 1113.08C993.565 1113.53 993.053 1113.75 992.458 1113.75C991.926 1113.75 991.489 1113.6 991.146 1113.3C990.807 1113 990.638 1112.61 990.638 1112.15C990.638 1111.59 990.85 1111.15 991.276 1110.85C991.705 1110.53 992.307 1110.38 993.081 1110.38H993.979V1109.95C993.979 1109.63 993.883 1109.37 993.69 1109.18C993.497 1108.99 993.213 1108.9 992.837 1108.9C992.508 1108.9 992.232 1108.98 992.009 1109.14C991.786 1109.31 991.675 1109.51 991.675 1109.75H990.747C990.747 1109.48 990.842 1109.22 991.032 1108.97C991.225 1108.72 991.484 1108.52 991.81 1108.37C992.139 1108.23 992.5 1108.15 992.892 1108.15C993.514 1108.15 994.001 1108.31 994.353 1108.62C994.706 1108.93 994.889 1109.36 994.902 1109.9V1112.39C994.902 1112.88 994.965 1113.28 995.091 1113.57V1113.65H994.124ZM992.593 1112.95C992.882 1112.95 993.156 1112.87 993.416 1112.72C993.675 1112.57 993.863 1112.38 993.979 1112.14V1111.03H993.256C992.126 1111.03 991.56 1111.36 991.56 1112.02C991.56 1112.31 991.657 1112.54 991.85 1112.7C992.042 1112.86 992.29 1112.95 992.593 1112.95ZM998.957 1109.08C998.817 1109.06 998.666 1109.05 998.503 1109.05C997.898 1109.05 997.487 1109.3 997.271 1109.82V1113.65H996.348V1108.25H997.246L997.261 1108.88C997.563 1108.39 997.992 1108.15 998.548 1108.15C998.727 1108.15 998.863 1108.18 998.957 1108.22V1109.08ZM1001.66 1112.3L1002.92 1108.25H1003.91L1001.74 1114.48C1001.4 1115.38 1000.87 1115.83 1000.14 1115.83L999.964 1115.81L999.62 1115.75V1115L999.869 1115.02C1000.18 1115.02 1000.42 1114.96 1000.6 1114.83C1000.77 1114.7 1000.92 1114.47 1001.03 1114.14L1001.24 1113.59L999.311 1108.25H1000.32L1001.66 1112.3Z"
            fill={textColor}
          />
        </g>

        <g
          className="selectable"
          onClick={() => handleBuildingSelect("BLDG_10")}
        >
          <g filter="url(#filter15_d)">
          <path
            className="building"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1090.96 1127.67L1110.78 1130.68L1110.47 1132.48L1144.11 1137.61L1147.75 1110.58L1133.32 1108.06L1133.93 1103.07L1132.63 1102.94L1133.27 1098.41L1134.74 1098.6L1136.31 1088.32L1139.81 1088.86L1138.47 1095.88L1140.88 1098.72L1148.92 1099.55L1155.05 1055.2L1147.93 1054.83L1148.15 1051.47L1141.78 1050.97L1141.37 1053.67L1133.6 1052.46L1128.58 1037.62L1132.25 1037.71L1132.27 1036.26L1130.93 1036.39L1130.91 1033.59L1132.03 1033.67L1131.99 1032.39L1126.49 1032L1123.6 1023.03L1151.39 1027.75L1155.4 1000.83L1151.04 1000.55L1151.66 992.422L1153.81 992.582L1153.55 993.644L1157.02 994.016L1157.04 993.072L1160.68 993.515L1163.77 966.754L1156.22 965.935L1156.2 964.652L1147.52 963.494L1147.35 964.977L1120.16 962.034L1118.21 976.891L1122.57 977.04L1121.39 988.189L1119.44 987.989L1117.92 989.084L1117.41 991.714L1116.86 994.477L1117.97 996.309L1120.14 996.809L1116.75 1022.69L1113.41 1023.65L1105.37 1025.97L1106.75 1029.31L1105.02 1029.59L1105.68 1032.12L1102.04 1032.2L1101.75 1037.85L1107.76 1037.65L1109.56 1043.57L1113.53 1042.34L1114.28 1044.34L1117.97 1042.98L1119.59 1048.25L1120.65 1048.59L1120.39 1049.57L1104.98 1047.87L1099.01 1092.11L1107 1093.12L1106.67 1096.4L1105.17 1096.05L1103.97 1105.3L1094.05 1104.05L1093.52 1107.7L1091.82 1107.64L1089.94 1121.37L1091.69 1121.6L1090.96 1127.67ZM1111.51 1076.68L1113.04 1065.89L1122.18 1067.2L1120.65 1077.97L1111.51 1076.68Z"
            fill={buildColor}
            stroke={buildStrokeColor}
            strokeWidth={buildStrokeWidth}
          />
        </g>
          <g filter="url(#filter16_d)">
          <rect
            className="marker"
            x="1092.36"
            y="1020.46"
            width="68"
            height="31"
            rx="3"
            fill="white"
          />
          </g>
          <g filter="url(#filter17_d)">
          <path
            className="arrow"
            d="M1127.78 1057.83C1127.39 1058.21 1126.78 1058.21 1126.39 1057.83L1118.03 1049.73C1117.39 1049.1 1117.83 1048.01 1118.73 1048.01L1135.44 1048.01C1136.34 1048.01 1136.79 1049.1 1136.14 1049.73L1127.78 1057.83Z"
            fill="white"
          />
          </g>
          <path
            d="M1110.17 1025.74L1112.54 1031.66L1114.92 1025.74H1116.16V1033H1115.2V1030.17L1115.29 1027.12L1112.91 1033H1112.17L1109.79 1027.13L1109.89 1030.17V1033H1108.93V1025.74H1110.17ZM1117.46 1030.25C1117.46 1029.72 1117.56 1029.25 1117.77 1028.83C1117.98 1028.4 1118.27 1028.08 1118.64 1027.85C1119.01 1027.62 1119.43 1027.5 1119.91 1027.5C1120.64 1027.5 1121.24 1027.76 1121.69 1028.27C1122.14 1028.78 1122.37 1029.45 1122.37 1030.3V1030.36C1122.37 1030.89 1122.27 1031.36 1122.07 1031.78C1121.87 1032.19 1121.58 1032.52 1121.21 1032.75C1120.83 1032.98 1120.4 1033.1 1119.92 1033.1C1119.19 1033.1 1118.59 1032.85 1118.14 1032.34C1117.69 1031.83 1117.46 1031.15 1117.46 1030.32V1030.25ZM1118.39 1030.36C1118.39 1030.96 1118.53 1031.44 1118.8 1031.8C1119.08 1032.17 1119.45 1032.35 1119.92 1032.35C1120.39 1032.35 1120.76 1032.16 1121.04 1031.8C1121.31 1031.43 1121.45 1030.91 1121.45 1030.25C1121.45 1029.66 1121.31 1029.18 1121.03 1028.82C1120.75 1028.45 1120.37 1028.26 1119.91 1028.26C1119.45 1028.26 1119.09 1028.44 1118.81 1028.81C1118.53 1029.17 1118.39 1029.69 1118.39 1030.36ZM1124.4 1027.6L1124.43 1028.28C1124.84 1027.76 1125.38 1027.5 1126.05 1027.5C1127.19 1027.5 1127.76 1028.15 1127.77 1029.43V1033H1126.85V1029.43C1126.85 1029.04 1126.76 1028.75 1126.58 1028.57C1126.41 1028.38 1126.14 1028.29 1125.77 1028.29C1125.47 1028.29 1125.21 1028.37 1124.98 1028.53C1124.75 1028.69 1124.58 1028.9 1124.45 1029.15V1033H1123.53V1027.6H1124.4ZM1132.5 1033C1132.44 1032.89 1132.4 1032.7 1132.37 1032.43C1131.94 1032.88 1131.43 1033.1 1130.83 1033.1C1130.3 1033.1 1129.86 1032.95 1129.52 1032.65C1129.18 1032.35 1129.01 1031.97 1129.01 1031.5C1129.01 1030.94 1129.22 1030.51 1129.65 1030.2C1130.08 1029.88 1130.68 1029.73 1131.45 1029.73H1132.35V1029.3C1132.35 1028.98 1132.26 1028.73 1132.06 1028.54C1131.87 1028.34 1131.59 1028.25 1131.21 1028.25C1130.88 1028.25 1130.6 1028.33 1130.38 1028.5C1130.16 1028.66 1130.05 1028.86 1130.05 1029.1H1129.12C1129.12 1028.83 1129.22 1028.57 1129.4 1028.32C1129.6 1028.07 1129.86 1027.87 1130.18 1027.72C1130.51 1027.58 1130.87 1027.5 1131.26 1027.5C1131.89 1027.5 1132.37 1027.66 1132.73 1027.97C1133.08 1028.28 1133.26 1028.71 1133.27 1029.25V1031.74C1133.27 1032.23 1133.34 1032.63 1133.46 1032.92V1033H1132.5ZM1130.97 1032.3C1131.25 1032.3 1131.53 1032.22 1131.79 1032.07C1132.05 1031.92 1132.24 1031.73 1132.35 1031.49V1030.38H1131.63C1130.5 1030.38 1129.93 1030.71 1129.93 1031.37C1129.93 1031.66 1130.03 1031.89 1130.22 1032.05C1130.42 1032.22 1130.66 1032.3 1130.97 1032.3ZM1137.86 1031.57C1137.86 1031.32 1137.77 1031.13 1137.58 1030.99C1137.39 1030.85 1137.07 1030.73 1136.6 1030.63C1136.13 1030.53 1135.76 1030.41 1135.48 1030.27C1135.21 1030.13 1135.01 1029.97 1134.88 1029.77C1134.75 1029.58 1134.68 1029.35 1134.68 1029.08C1134.68 1028.64 1134.87 1028.27 1135.24 1027.96C1135.62 1027.66 1136.09 1027.5 1136.68 1027.5C1137.29 1027.5 1137.78 1027.66 1138.16 1027.98C1138.54 1028.29 1138.74 1028.7 1138.74 1029.19H1137.81C1137.81 1028.94 1137.7 1028.72 1137.48 1028.54C1137.27 1028.35 1137 1028.26 1136.68 1028.26C1136.34 1028.26 1136.08 1028.33 1135.89 1028.48C1135.7 1028.63 1135.6 1028.82 1135.6 1029.05C1135.6 1029.28 1135.69 1029.45 1135.87 1029.56C1136.04 1029.67 1136.36 1029.78 1136.82 1029.88C1137.28 1029.99 1137.66 1030.11 1137.94 1030.25C1138.23 1030.39 1138.44 1030.57 1138.58 1030.77C1138.72 1030.97 1138.79 1031.21 1138.79 1031.5C1138.79 1031.99 1138.59 1032.37 1138.21 1032.67C1137.82 1032.95 1137.32 1033.1 1136.71 1033.1C1136.27 1033.1 1135.89 1033.02 1135.56 1032.87C1135.23 1032.72 1134.97 1032.5 1134.78 1032.23C1134.59 1031.96 1134.5 1031.66 1134.5 1031.34H1135.42C1135.44 1031.65 1135.56 1031.89 1135.79 1032.08C1136.02 1032.26 1136.33 1032.35 1136.71 1032.35C1137.06 1032.35 1137.33 1032.28 1137.54 1032.14C1137.76 1031.99 1137.86 1031.8 1137.86 1031.57ZM1140.91 1028.26C1141.32 1027.75 1141.85 1027.5 1142.51 1027.5C1143.65 1027.5 1144.22 1028.15 1144.23 1029.43V1033H1143.31V1029.43C1143.31 1029.04 1143.22 1028.75 1143.04 1028.57C1142.87 1028.38 1142.6 1028.29 1142.23 1028.29C1141.93 1028.29 1141.67 1028.37 1141.44 1028.53C1141.21 1028.69 1141.04 1028.9 1140.91 1029.15V1033H1139.99V1025.34H1140.91V1028.26ZM1114.51 1041.76C1113.69 1041.53 1113.09 1041.24 1112.72 1040.9C1112.34 1040.55 1112.16 1040.12 1112.16 1039.62C1112.16 1039.05 1112.39 1038.57 1112.84 1038.2C1113.3 1037.83 1113.9 1037.64 1114.63 1037.64C1115.13 1037.64 1115.57 1037.73 1115.96 1037.93C1116.35 1038.12 1116.65 1038.39 1116.87 1038.73C1117.08 1039.06 1117.19 1039.44 1117.19 1039.84H1116.23C1116.23 1039.4 1116.09 1039.05 1115.81 1038.81C1115.53 1038.55 1115.14 1038.43 1114.63 1038.43C1114.16 1038.43 1113.79 1038.53 1113.52 1038.74C1113.26 1038.95 1113.13 1039.23 1113.13 1039.6C1113.13 1039.9 1113.25 1040.15 1113.5 1040.36C1113.75 1040.56 1114.18 1040.75 1114.78 1040.92C1115.39 1041.08 1115.86 1041.27 1116.2 1041.48C1116.54 1041.68 1116.79 1041.92 1116.96 1042.19C1117.12 1042.46 1117.21 1042.79 1117.21 1043.15C1117.21 1043.74 1116.98 1044.22 1116.52 1044.57C1116.06 1044.92 1115.45 1045.1 1114.68 1045.1C1114.18 1045.1 1113.71 1045 1113.28 1044.82C1112.85 1044.62 1112.51 1044.36 1112.28 1044.03C1112.05 1043.69 1111.93 1043.32 1111.93 1042.9H1112.89C1112.89 1043.33 1113.05 1043.68 1113.38 1043.94C1113.7 1044.19 1114.14 1044.32 1114.68 1044.32C1115.18 1044.32 1115.57 1044.21 1115.84 1044.01C1116.11 1043.8 1116.24 1043.52 1116.24 1043.16C1116.24 1042.81 1116.12 1042.53 1115.87 1042.34C1115.62 1042.15 1115.17 1041.95 1114.51 1041.76ZM1122.85 1042.36C1122.85 1043.18 1122.66 1043.84 1122.29 1044.35C1121.91 1044.85 1121.4 1045.1 1120.76 1045.1C1120.11 1045.1 1119.59 1044.89 1119.22 1044.48V1047.07H1118.29V1039.6H1119.14L1119.18 1040.2C1119.56 1039.74 1120.08 1039.5 1120.75 1039.5C1121.39 1039.5 1121.91 1039.75 1122.28 1040.24C1122.66 1040.73 1122.85 1041.41 1122.85 1042.28V1042.36ZM1121.93 1042.26C1121.93 1041.65 1121.8 1041.17 1121.54 1040.82C1121.28 1040.46 1120.92 1040.29 1120.47 1040.29C1119.91 1040.29 1119.49 1040.53 1119.22 1041.03V1043.61C1119.49 1044.1 1119.91 1044.35 1120.48 1044.35C1120.92 1044.35 1121.28 1044.17 1121.53 1043.82C1121.8 1043.47 1121.93 1042.95 1121.93 1042.26ZM1123.78 1042.25C1123.78 1041.72 1123.89 1041.25 1124.09 1040.83C1124.3 1040.4 1124.59 1040.08 1124.96 1039.85C1125.33 1039.62 1125.76 1039.5 1126.23 1039.5C1126.97 1039.5 1127.56 1039.76 1128.01 1040.27C1128.47 1040.78 1128.7 1041.45 1128.7 1042.3V1042.36C1128.7 1042.89 1128.59 1043.36 1128.39 1043.78C1128.19 1044.19 1127.91 1044.52 1127.53 1044.75C1127.16 1044.98 1126.73 1045.1 1126.24 1045.1C1125.51 1045.1 1124.92 1044.85 1124.46 1044.34C1124.01 1043.83 1123.78 1043.15 1123.78 1042.32V1042.25ZM1124.71 1042.36C1124.71 1042.96 1124.85 1043.44 1125.13 1043.8C1125.4 1044.17 1125.78 1044.35 1126.24 1044.35C1126.71 1044.35 1127.08 1044.16 1127.36 1043.8C1127.64 1043.43 1127.77 1042.91 1127.77 1042.25C1127.77 1041.66 1127.63 1041.18 1127.35 1040.82C1127.07 1040.45 1126.7 1040.26 1126.23 1040.26C1125.78 1040.26 1125.41 1040.44 1125.13 1040.81C1124.85 1041.17 1124.71 1041.69 1124.71 1042.36ZM1132.46 1040.43C1132.32 1040.41 1132.17 1040.4 1132.01 1040.4C1131.4 1040.4 1130.99 1040.65 1130.78 1041.17V1045H1129.85V1039.6H1130.75L1130.77 1040.23C1131.07 1039.74 1131.5 1039.5 1132.05 1039.5C1132.23 1039.5 1132.37 1039.53 1132.46 1039.57V1040.43ZM1134.82 1038.3V1039.6H1135.82V1040.32H1134.82V1043.66C1134.82 1043.88 1134.86 1044.04 1134.95 1044.15C1135.04 1044.26 1135.19 1044.31 1135.41 1044.31C1135.52 1044.31 1135.66 1044.29 1135.85 1044.25V1045C1135.61 1045.07 1135.37 1045.1 1135.14 1045.1C1134.73 1045.1 1134.42 1044.97 1134.21 1044.73C1134 1044.48 1133.89 1044.12 1133.89 1043.66V1040.32H1132.91V1039.6H1133.89V1038.3H1134.82ZM1140.05 1043.57C1140.05 1043.32 1139.95 1043.13 1139.76 1042.99C1139.58 1042.85 1139.25 1042.73 1138.78 1042.63C1138.32 1042.53 1137.94 1042.41 1137.67 1042.27C1137.4 1042.13 1137.19 1041.97 1137.06 1041.77C1136.93 1041.58 1136.87 1041.35 1136.87 1041.08C1136.87 1040.64 1137.05 1040.27 1137.42 1039.96C1137.8 1039.66 1138.28 1039.5 1138.86 1039.5C1139.47 1039.5 1139.97 1039.66 1140.35 1039.98C1140.73 1040.29 1140.92 1040.7 1140.92 1041.19H1139.99C1139.99 1040.94 1139.88 1040.72 1139.67 1040.54C1139.46 1040.35 1139.19 1040.26 1138.86 1040.26C1138.52 1040.26 1138.26 1040.33 1138.07 1040.48C1137.88 1040.63 1137.79 1040.82 1137.79 1041.05C1137.79 1041.28 1137.88 1041.45 1138.05 1041.56C1138.23 1041.67 1138.55 1041.78 1139.01 1041.88C1139.47 1041.99 1139.84 1042.11 1140.13 1042.25C1140.41 1042.39 1140.62 1042.57 1140.76 1042.77C1140.9 1042.97 1140.97 1043.21 1140.97 1043.5C1140.97 1043.99 1140.78 1044.37 1140.39 1044.67C1140.01 1044.95 1139.51 1045.1 1138.89 1045.1C1138.46 1045.1 1138.08 1045.02 1137.74 1044.87C1137.41 1044.72 1137.15 1044.5 1136.96 1044.23C1136.77 1043.96 1136.68 1043.66 1136.68 1043.34H1137.6C1137.62 1043.65 1137.74 1043.89 1137.97 1044.08C1138.21 1044.26 1138.51 1044.35 1138.89 1044.35C1139.24 1044.35 1139.52 1044.28 1139.73 1044.14C1139.94 1043.99 1140.05 1043.8 1140.05 1043.57Z"
            fill={textColor}
          />
        </g>

        <g
          className="selectable"
          onClick={() => handleBuildingSelect("BLDG_3")}
        >
          <g filter="url(#filter18_d)">
          <path
            className="building"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M796.661 913.273L813.773 910.576L811.923 898.46L814.76 904.271L821.023 900.841L819.104 897.642L833.432 895.539L830.739 876.072L823.15 877.259L823.309 878.424L808.484 880.336L806.72 870.128L790.91 872.785L793.07 888.173L796.661 913.273Z"
            fill={buildColor}
            stroke={buildStrokeColor}
            strokeWidth={buildStrokeWidth}
          />
          </g>
          <g filter="url(#filter19_d)">
          <rect
            className="marker"
            x="760.226"
            y="850.861"
            width="106"
            height="31"
            rx="3"
            fill="white"
          />
          </g>
          <g filter="url(#filter20_d)">
          <path
            className="arrow"
            d="M812.422 888.186C812.034 888.562 811.417 888.562 811.029 888.186L802.671 880.079C802.027 879.453 802.469 878.361 803.368 878.361L820.084 878.361C820.982 878.361 821.425 879.453 820.78 880.079L812.422 888.186Z"
            fill="white"
          />
          </g>
          <path
            d="M780.493 863.861H779.531V860.504H775.87V863.861H774.913V856.599H775.87V859.721H779.531V856.599H780.493V863.861ZM785.381 863.861C785.328 863.754 785.285 863.565 785.251 863.292C784.822 863.738 784.31 863.961 783.715 863.961C783.183 863.961 782.746 863.811 782.404 863.512C782.064 863.209 781.895 862.827 781.895 862.365C781.895 861.803 782.108 861.367 782.533 861.058C782.962 860.745 783.564 860.589 784.339 860.589H785.236V860.165C785.236 859.843 785.14 859.587 784.947 859.397C784.754 859.204 784.47 859.108 784.094 859.108C783.765 859.108 783.489 859.191 783.266 859.357C783.044 859.524 782.932 859.725 782.932 859.961H782.005C782.005 859.691 782.099 859.432 782.289 859.183C782.482 858.93 782.741 858.731 783.067 858.584C783.396 858.438 783.757 858.365 784.149 858.365C784.771 858.365 785.258 858.521 785.61 858.834C785.963 859.143 786.146 859.57 786.159 860.115V862.599C786.159 863.094 786.222 863.488 786.348 863.781V863.861H785.381ZM783.85 863.158C784.139 863.158 784.413 863.083 784.673 862.933C784.932 862.784 785.12 862.589 785.236 862.35V861.243H784.513C783.383 861.243 782.817 861.573 782.817 862.235C782.817 862.524 782.914 862.75 783.107 862.913C783.3 863.076 783.547 863.158 783.85 863.158ZM790.214 859.292C790.074 859.269 789.923 859.258 789.76 859.258C789.155 859.258 788.744 859.515 788.528 860.031V863.861H787.605V858.465H788.503L788.518 859.088C788.821 858.606 789.249 858.365 789.805 858.365C789.984 858.365 790.121 858.388 790.214 858.435V859.292ZM790.747 861.118C790.747 860.277 790.942 859.608 791.331 859.113C791.72 858.614 792.235 858.365 792.877 858.365C793.535 858.365 794.049 858.598 794.418 859.063L794.463 858.465H795.306V863.731C795.306 864.429 795.098 864.98 794.682 865.382C794.27 865.784 793.715 865.985 793.017 865.985C792.628 865.985 792.247 865.902 791.874 865.736C791.502 865.57 791.218 865.342 791.022 865.053L791.5 864.499C791.896 864.988 792.38 865.232 792.952 865.232C793.401 865.232 793.75 865.106 793.999 864.853C794.252 864.601 794.378 864.245 794.378 863.786V863.322C794.009 863.748 793.505 863.961 792.867 863.961C792.235 863.961 791.723 863.706 791.331 863.198C790.942 862.689 790.747 861.996 790.747 861.118ZM791.675 861.223C791.675 861.831 791.8 862.31 792.049 862.659C792.298 863.005 792.647 863.178 793.096 863.178C793.678 863.178 794.105 862.913 794.378 862.385V859.921C794.095 859.406 793.672 859.148 793.106 859.148C792.657 859.148 792.307 859.322 792.054 859.671C791.801 860.021 791.675 860.538 791.675 861.223ZM799.311 859.292C799.171 859.269 799.02 859.258 798.857 859.258C798.252 859.258 797.841 859.515 797.625 860.031V863.861H796.702V858.465H797.6L797.615 859.088C797.917 858.606 798.346 858.365 798.902 858.365C799.081 858.365 799.217 858.388 799.311 858.435V859.292ZM803.295 863.861C803.242 863.754 803.199 863.565 803.166 863.292C802.737 863.738 802.225 863.961 801.63 863.961C801.098 863.961 800.66 863.811 800.318 863.512C799.979 863.209 799.809 862.827 799.809 862.365C799.809 861.803 800.022 861.367 800.448 861.058C800.877 860.745 801.478 860.589 802.253 860.589H803.151V860.165C803.151 859.843 803.054 859.587 802.861 859.397C802.669 859.204 802.384 859.108 802.009 859.108C801.679 859.108 801.404 859.191 801.181 859.357C800.958 859.524 800.847 859.725 800.847 859.961H799.919C799.919 859.691 800.014 859.432 800.203 859.183C800.396 858.93 800.655 858.731 800.981 858.584C801.31 858.438 801.671 858.365 802.063 858.365C802.685 858.365 803.172 858.521 803.525 858.834C803.877 859.143 804.06 859.57 804.073 860.115V862.599C804.073 863.094 804.137 863.488 804.263 863.781V863.861H803.295ZM801.764 863.158C802.054 863.158 802.328 863.083 802.587 862.933C802.847 862.784 803.034 862.589 803.151 862.35V861.243H802.428C801.297 861.243 800.732 861.573 800.732 862.235C800.732 862.524 800.828 862.75 801.021 862.913C801.214 863.076 801.462 863.158 801.764 863.158ZM807.22 862.609L808.557 858.465H809.5L807.565 863.861H806.861L804.906 858.465H805.849L807.22 862.609ZM812.557 863.961C811.825 863.961 811.23 863.721 810.771 863.242C810.313 862.76 810.083 862.117 810.083 861.312V861.143C810.083 860.607 810.184 860.13 810.387 859.711C810.593 859.289 810.879 858.96 811.245 858.724C811.614 858.485 812.013 858.365 812.442 858.365C813.144 858.365 813.689 858.596 814.078 859.058C814.467 859.52 814.661 860.182 814.661 861.043V861.427H811.006C811.019 861.959 811.174 862.39 811.47 862.719C811.769 863.045 812.148 863.208 812.607 863.208C812.933 863.208 813.208 863.141 813.435 863.008C813.661 862.875 813.858 862.699 814.028 862.479L814.592 862.918C814.139 863.613 813.461 863.961 812.557 863.961ZM812.442 859.123C812.07 859.123 811.757 859.259 811.504 859.532C811.252 859.801 811.096 860.18 811.036 860.669H813.739V860.599C813.712 860.13 813.586 859.768 813.36 859.512C813.134 859.253 812.828 859.123 812.442 859.123ZM817.654 861.153H815.22V860.4H817.654V861.153ZM822.711 861.966H819.669L818.985 863.861H817.998L820.771 856.599H821.609L824.387 863.861H823.404L822.711 861.966ZM819.958 861.178H822.427L821.19 857.781L819.958 861.178ZM826.092 858.465L826.122 859.143C826.535 858.624 827.073 858.365 827.738 858.365C828.879 858.365 829.454 859.008 829.464 860.295V863.861H828.541V860.29C828.538 859.901 828.448 859.613 828.272 859.427C828.099 859.241 827.828 859.148 827.459 859.148C827.16 859.148 826.897 859.228 826.671 859.387C826.445 859.547 826.269 859.756 826.142 860.016V863.861H825.22V858.465H826.092ZM830.631 861.118C830.631 860.29 830.827 859.625 831.219 859.123C831.612 858.618 832.125 858.365 832.76 858.365C833.392 858.365 833.893 858.581 834.262 859.013V856.2H835.184V863.861H834.336L834.291 863.282C833.922 863.734 833.409 863.961 832.75 863.961C832.125 863.961 831.615 863.705 831.219 863.193C830.827 862.681 830.631 862.012 830.631 861.188V861.118ZM831.553 861.223C831.553 861.834 831.68 862.313 831.932 862.659C832.185 863.005 832.534 863.178 832.98 863.178C833.565 863.178 833.992 862.915 834.262 862.39V859.911C833.986 859.402 833.562 859.148 832.99 859.148C832.538 859.148 832.185 859.322 831.932 859.671C831.68 860.021 831.553 860.538 831.553 861.223ZM839.229 859.292C839.089 859.269 838.938 859.258 838.775 859.258C838.17 859.258 837.759 859.515 837.543 860.031V863.861H836.621V858.465H837.518L837.533 859.088C837.836 858.606 838.265 858.365 838.82 858.365C839 858.365 839.136 858.388 839.229 858.435V859.292ZM842.221 863.961C841.49 863.961 840.895 863.721 840.436 863.242C839.977 862.76 839.748 862.117 839.748 861.312V861.143C839.748 860.607 839.849 860.13 840.052 859.711C840.258 859.289 840.544 858.96 840.91 858.724C841.279 858.485 841.678 858.365 842.107 858.365C842.808 858.365 843.353 858.596 843.742 859.058C844.131 859.52 844.326 860.182 844.326 861.043V861.427H840.67C840.684 861.959 840.838 862.39 841.134 862.719C841.433 863.045 841.812 863.208 842.271 863.208C842.597 863.208 842.873 863.141 843.099 863.008C843.325 862.875 843.523 862.699 843.693 862.479L844.256 862.918C843.804 863.613 843.126 863.961 842.221 863.961ZM842.107 859.123C841.734 859.123 841.422 859.259 841.169 859.532C840.916 859.801 840.76 860.18 840.7 860.669H843.403V860.599C843.377 860.13 843.25 859.768 843.024 859.512C842.798 859.253 842.492 859.123 842.107 859.123ZM850.176 862.589L851.213 858.465H852.136L850.565 863.861H849.817L848.505 859.771L847.229 863.861H846.48L844.914 858.465H845.832L846.894 862.504L848.151 858.465H848.894L850.176 862.589ZM799.57 875.078H803.011V875.861H798.607V868.599H799.57V875.078ZM804.961 875.861H804.038V870.465H804.961V875.861ZM803.964 869.033C803.964 868.884 804.009 868.757 804.098 868.654C804.191 868.551 804.328 868.5 804.507 868.5C804.687 868.5 804.823 868.551 804.916 868.654C805.009 868.757 805.056 868.884 805.056 869.033C805.056 869.183 805.009 869.308 804.916 869.407C804.823 869.507 804.687 869.557 804.507 869.557C804.328 869.557 804.191 869.507 804.098 869.407C804.009 869.308 803.964 869.183 803.964 869.033ZM811.011 873.223C811.011 874.047 810.821 874.71 810.442 875.212C810.063 875.711 809.554 875.961 808.916 875.961C808.234 875.961 807.707 875.72 807.335 875.237L807.29 875.861H806.442V868.2H807.365V871.058C807.737 870.596 808.251 870.365 808.906 870.365C809.561 870.365 810.075 870.613 810.447 871.108C810.823 871.603 811.011 872.282 811.011 873.143V873.223ZM810.088 873.118C810.088 872.489 809.967 872.004 809.724 871.662C809.481 871.319 809.132 871.148 808.677 871.148C808.068 871.148 807.631 871.43 807.365 871.996V874.33C807.648 874.895 808.088 875.178 808.687 875.178C809.129 875.178 809.473 875.006 809.719 874.664C809.965 874.321 810.088 873.806 810.088 873.118ZM814.786 871.292C814.646 871.269 814.495 871.258 814.332 871.258C813.727 871.258 813.317 871.515 813.1 872.031V875.861H812.178V870.465H813.075L813.09 871.088C813.393 870.606 813.822 870.365 814.377 870.365C814.557 870.365 814.693 870.388 814.786 870.435V871.292ZM818.771 875.861C818.718 875.754 818.675 875.565 818.641 875.292C818.212 875.738 817.7 875.961 817.105 875.961C816.573 875.961 816.136 875.811 815.794 875.512C815.454 875.209 815.285 874.827 815.285 874.365C815.285 873.803 815.498 873.367 815.923 873.058C816.352 872.745 816.954 872.589 817.729 872.589H818.626V872.165C818.626 871.843 818.53 871.587 818.337 871.397C818.144 871.204 817.86 871.108 817.484 871.108C817.155 871.108 816.879 871.191 816.656 871.357C816.434 871.524 816.322 871.725 816.322 871.961H815.395C815.395 871.691 815.489 871.432 815.679 871.183C815.872 870.93 816.131 870.731 816.457 870.584C816.786 870.438 817.147 870.365 817.539 870.365C818.161 870.365 818.648 870.521 819 870.834C819.353 871.143 819.536 871.57 819.549 872.115V874.599C819.549 875.094 819.612 875.488 819.739 875.781V875.861H818.771ZM817.24 875.158C817.529 875.158 817.803 875.083 818.063 874.933C818.322 874.784 818.51 874.589 818.626 874.35V873.243H817.903C816.773 873.243 816.208 873.573 816.208 874.235C816.208 874.524 816.304 874.75 816.497 874.913C816.69 875.076 816.937 875.158 817.24 875.158ZM823.604 871.292C823.464 871.269 823.313 871.258 823.15 871.258C822.545 871.258 822.134 871.515 821.918 872.031V875.861H820.995V870.465H821.893L821.908 871.088C822.211 870.606 822.639 870.365 823.195 870.365C823.374 870.365 823.511 870.388 823.604 870.435V871.292ZM826.312 874.509L827.569 870.465H828.556L826.387 876.694C826.051 877.591 825.517 878.04 824.786 878.04L824.611 878.025L824.267 877.96V877.212L824.516 877.232C824.829 877.232 825.072 877.169 825.245 877.043C825.421 876.916 825.565 876.685 825.678 876.35L825.883 875.801L823.958 870.465H824.965L826.312 874.509Z"
            fill={textColor}
          />
        </g>

        <g
          className="selectable"
          onClick={() => handleBuildingSelect("BLDG_4")}
        >
          <g filter="url(#filter21_d)">
          <rect
            className="marker"
            x="840"
            y="934"
            width="97"
            height="31"
            rx="3"
            fill="white"
          />
          </g>
          <g filter="url(#filter22_d)">
          <path
            className="arrow"
            d="M887.42 971.186C887.032 971.562 886.416 971.562 886.028 971.186L877.67 963.079C877.025 962.454 877.468 961.361 878.366 961.361L895.082 961.361C895.98 961.361 896.423 962.454 895.778 963.079L887.42 971.186Z"
            fill="white"
          />
        </g>
          <path
            d="M854.604 946.078H858.045V946.861H853.641V939.6H854.604V946.078ZM861.232 946.961C860.5 946.961 859.905 946.722 859.446 946.243C858.988 945.761 858.758 945.117 858.758 944.313V944.143C858.758 943.608 858.86 943.131 859.062 942.712C859.268 942.29 859.554 941.96 859.92 941.724C860.289 941.485 860.688 941.365 861.117 941.365C861.819 941.365 862.364 941.596 862.753 942.059C863.142 942.521 863.336 943.182 863.336 944.043V944.428H859.681C859.694 944.96 859.849 945.39 860.145 945.719C860.444 946.045 860.823 946.208 861.282 946.208C861.608 946.208 861.883 946.141 862.11 946.008C862.336 945.876 862.534 945.699 862.703 945.48L863.267 945.919C862.814 946.614 862.136 946.961 861.232 946.961ZM861.117 942.123C860.745 942.123 860.432 942.26 860.179 942.532C859.927 942.802 859.771 943.181 859.711 943.669H862.414V943.6C862.387 943.131 862.261 942.768 862.035 942.512C861.809 942.253 861.503 942.123 861.117 942.123ZM865.277 941.465L865.301 942.064C865.697 941.598 866.231 941.365 866.902 941.365C867.657 941.365 868.171 941.655 868.443 942.233C868.623 941.974 868.856 941.764 869.142 941.605C869.431 941.445 869.772 941.365 870.164 941.365C871.348 941.365 871.95 941.992 871.969 943.246V946.861H871.047V943.3C871.047 942.915 870.959 942.627 870.783 942.438C870.606 942.245 870.31 942.148 869.895 942.148C869.552 942.148 869.268 942.251 869.042 942.458C868.816 942.66 868.685 942.935 868.648 943.28V946.861H867.72V943.325C867.72 942.541 867.336 942.148 866.568 942.148C865.963 942.148 865.549 942.406 865.326 942.921V946.861H864.404V941.465H865.277ZM873.122 944.113C873.122 943.585 873.225 943.109 873.431 942.687C873.64 942.265 873.93 941.939 874.299 941.709C874.671 941.48 875.095 941.365 875.57 941.365C876.305 941.365 876.899 941.62 877.351 942.128C877.806 942.637 878.034 943.314 878.034 944.158V944.223C878.034 944.748 877.933 945.221 877.73 945.639C877.53 946.055 877.243 946.379 876.867 946.612C876.495 946.845 876.066 946.961 875.58 946.961C874.849 946.961 874.255 946.707 873.8 946.198C873.348 945.689 873.122 945.016 873.122 944.178V944.113ZM874.049 944.223C874.049 944.822 874.187 945.302 874.463 945.664C874.742 946.027 875.115 946.208 875.58 946.208C876.049 946.208 876.422 946.025 876.697 945.659C876.973 945.29 877.111 944.775 877.111 944.113C877.111 943.521 876.97 943.043 876.687 942.677C876.408 942.308 876.036 942.123 875.57 942.123C875.115 942.123 874.747 942.305 874.468 942.667C874.189 943.029 874.049 943.548 874.049 944.223ZM880.064 941.465L880.094 942.143C880.506 941.625 881.045 941.365 881.71 941.365C882.85 941.365 883.425 942.009 883.435 943.295V946.861H882.513V943.29C882.509 942.901 882.42 942.614 882.243 942.428C882.07 942.241 881.799 942.148 881.43 942.148C881.131 942.148 880.869 942.228 880.642 942.388C880.416 942.547 880.24 942.757 880.114 943.016V946.861H879.191V941.465H880.064ZM889.645 943.625C888.823 943.388 888.225 943.099 887.849 942.757C887.477 942.411 887.291 941.985 887.291 941.48C887.291 940.908 887.518 940.436 887.974 940.064C888.433 939.688 889.028 939.5 889.759 939.5C890.258 939.5 890.702 939.596 891.091 939.789C891.483 939.982 891.786 940.248 891.999 940.587C892.215 940.926 892.323 941.297 892.323 941.699H891.36C891.36 941.261 891.221 940.916 890.941 940.667C890.662 940.414 890.268 940.288 889.759 940.288C889.287 940.288 888.918 940.393 888.652 940.602C888.389 940.808 888.258 941.096 888.258 941.465C888.258 941.761 888.383 942.012 888.632 942.218C888.885 942.421 889.312 942.607 889.914 942.777C890.519 942.946 890.991 943.134 891.33 943.34C891.673 943.543 891.925 943.781 892.088 944.053C892.255 944.326 892.338 944.647 892.338 945.016C892.338 945.605 892.108 946.077 891.649 946.432C891.191 946.785 890.577 946.961 889.809 946.961C889.31 946.961 888.845 946.866 888.413 946.677C887.98 946.484 887.646 946.221 887.41 945.889C887.177 945.556 887.061 945.179 887.061 944.757H888.024C888.024 945.196 888.185 945.543 888.507 945.799C888.833 946.052 889.267 946.178 889.809 946.178C890.314 946.178 890.702 946.075 890.971 945.869C891.24 945.663 891.375 945.382 891.375 945.026C891.375 944.67 891.25 944.396 891.001 944.203C890.752 944.007 890.3 943.814 889.645 943.625ZM895.589 946.208C895.919 946.208 896.206 946.108 896.452 945.909C896.698 945.709 896.835 945.46 896.861 945.161H897.734C897.717 945.47 897.611 945.764 897.415 946.043C897.219 946.323 896.956 946.545 896.627 946.712C896.301 946.878 895.955 946.961 895.589 946.961C894.855 946.961 894.269 946.717 893.834 946.228C893.402 945.736 893.186 945.064 893.186 944.213V944.058C893.186 943.533 893.282 943.066 893.475 942.657C893.668 942.248 893.944 941.931 894.303 941.704C894.665 941.478 895.092 941.365 895.584 941.365C896.19 941.365 896.692 941.547 897.091 941.909C897.493 942.271 897.707 942.742 897.734 943.32H896.861C896.835 942.971 896.702 942.685 896.462 942.463C896.226 942.236 895.934 942.123 895.584 942.123C895.116 942.123 894.752 942.293 894.492 942.632C894.236 942.968 894.108 943.455 894.108 944.093V944.268C894.108 944.89 894.236 945.368 894.492 945.704C894.748 946.04 895.114 946.208 895.589 946.208ZM901.011 946.961C900.279 946.961 899.684 946.722 899.225 946.243C898.766 945.761 898.537 945.117 898.537 944.313V944.143C898.537 943.608 898.638 943.131 898.841 942.712C899.047 942.29 899.333 941.96 899.699 941.724C900.068 941.485 900.467 941.365 900.896 941.365C901.597 941.365 902.143 941.596 902.532 942.059C902.921 942.521 903.115 943.182 903.115 944.043V944.428H899.46C899.473 944.96 899.627 945.39 899.923 945.719C900.223 946.045 900.602 946.208 901.06 946.208C901.386 946.208 901.662 946.141 901.888 946.008C902.114 945.876 902.312 945.699 902.482 945.48L903.045 945.919C902.593 946.614 901.915 946.961 901.011 946.961ZM900.896 942.123C900.524 942.123 900.211 942.26 899.958 942.532C899.706 942.802 899.549 943.181 899.489 943.669H902.193V943.6C902.166 943.131 902.04 942.768 901.814 942.512C901.587 942.253 901.282 942.123 900.896 942.123ZM905.06 941.465L905.09 942.143C905.503 941.625 906.041 941.365 906.706 941.365C907.847 941.365 908.422 942.009 908.432 943.295V946.861H907.509V943.29C907.506 942.901 907.416 942.614 907.24 942.428C907.067 942.241 906.796 942.148 906.427 942.148C906.128 942.148 905.865 942.228 905.639 942.388C905.413 942.547 905.237 942.757 905.11 943.016V946.861H904.188V941.465H905.06ZM911.075 940.158V941.465H912.082V942.178H911.075V945.525C911.075 945.741 911.12 945.904 911.21 946.013C911.299 946.12 911.452 946.173 911.668 946.173C911.775 946.173 911.921 946.153 912.107 946.113V946.861C911.865 946.928 911.629 946.961 911.399 946.961C910.987 946.961 910.676 946.836 910.467 946.587C910.257 946.338 910.152 945.984 910.152 945.525V942.178H909.17V941.465H910.152V940.158H911.075ZM915.404 946.961C914.673 946.961 914.077 946.722 913.619 946.243C913.16 945.761 912.93 945.117 912.93 944.313V944.143C912.93 943.608 913.032 943.131 913.235 942.712C913.441 942.29 913.727 941.96 914.092 941.724C914.461 941.485 914.86 941.365 915.289 941.365C915.991 941.365 916.536 941.596 916.925 942.059C917.314 942.521 917.509 943.182 917.509 944.043V944.428H913.853C913.866 944.96 914.021 945.39 914.317 945.719C914.616 946.045 914.995 946.208 915.454 946.208C915.78 946.208 916.056 946.141 916.282 946.008C916.508 945.876 916.706 945.699 916.875 945.48L917.439 945.919C916.987 946.614 916.308 946.961 915.404 946.961ZM915.289 942.123C914.917 942.123 914.604 942.26 914.352 942.532C914.099 942.802 913.943 943.181 913.883 943.669H916.586V943.6C916.559 943.131 916.433 942.768 916.207 942.512C915.981 942.253 915.675 942.123 915.289 942.123ZM918.356 944.118C918.356 943.29 918.553 942.625 918.945 942.123C919.337 941.618 919.851 941.365 920.486 941.365C921.118 941.365 921.618 941.581 921.987 942.014V939.201H922.91V946.861H922.062L922.017 946.283C921.648 946.735 921.134 946.961 920.476 946.961C919.851 946.961 919.341 946.705 918.945 946.193C918.553 945.681 918.356 945.013 918.356 944.188V944.118ZM919.279 944.223C919.279 944.835 919.405 945.314 919.658 945.659C919.911 946.005 920.26 946.178 920.705 946.178C921.291 946.178 921.718 945.915 921.987 945.39V942.911C921.711 942.403 921.287 942.148 920.715 942.148C920.263 942.148 919.911 942.323 919.658 942.672C919.405 943.021 919.279 943.538 919.279 944.223ZM877.845 958.078H881.286V958.861H876.882V951.6H877.845V958.078ZM885.565 958.861C885.512 958.755 885.468 958.565 885.435 958.293C885.006 958.738 884.494 958.961 883.899 958.961C883.367 958.961 882.93 958.811 882.587 958.512C882.248 958.21 882.079 957.827 882.079 957.365C882.079 956.803 882.292 956.368 882.717 956.058C883.146 955.746 883.748 955.59 884.523 955.59H885.42V955.166C885.42 954.843 885.324 954.587 885.131 954.398C884.938 954.205 884.654 954.108 884.278 954.108C883.949 954.108 883.673 954.192 883.45 954.358C883.228 954.524 883.116 954.725 883.116 954.961H882.189C882.189 954.692 882.283 954.433 882.473 954.183C882.666 953.931 882.925 953.731 883.251 953.585C883.58 953.438 883.941 953.365 884.333 953.365C884.955 953.365 885.442 953.522 885.794 953.834C886.147 954.143 886.33 954.571 886.343 955.116V957.6C886.343 958.095 886.406 958.489 886.532 958.782V958.861H885.565ZM884.034 958.158C884.323 958.158 884.597 958.083 884.857 957.934C885.116 957.784 885.304 957.59 885.42 957.35V956.243H884.697C883.567 956.243 883.001 956.574 883.001 957.235C883.001 957.525 883.098 957.751 883.291 957.914C883.484 958.077 883.731 958.158 884.034 958.158ZM892.567 957.59L893.604 953.465H894.527L892.956 958.861H892.208L890.896 954.772L889.62 958.861H888.871L887.305 953.465H888.223L889.285 957.505L890.542 953.465H891.285L892.567 957.59ZM896.342 953.465L896.372 954.143C896.785 953.625 897.323 953.365 897.988 953.365C899.129 953.365 899.704 954.009 899.714 955.295V958.861H898.791V955.29C898.788 954.901 898.698 954.614 898.522 954.428C898.349 954.241 898.078 954.148 897.709 954.148C897.41 954.148 897.147 954.228 896.921 954.388C896.695 954.547 896.519 954.757 896.392 955.016V958.861H895.47V953.465H896.342Z"
            fill={textColor}
          />
        </g>

        <g
          className="selectable"
          onClick={() => handleBuildingSelect("BLDG_2")}
        >
          <g filter="url(#filter23_d)">
          <path
            className="building"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M861.546 843.746L941.246 833.468L938.108 808.639L927.705 810.056L928.011 812.472L913.39 814.062L911.881 804.192L920.764 802.841L921.27 805.988L949.926 802.318L949.606 799.814L957.257 798.752L954.513 776.416L909.028 781.695L907.749 771.61L853.784 778.083L861.546 843.746Z"
            fill={buildColor}
            stroke={buildStrokeColor}
            strokeWidth={buildStrokeWidth}
          />
          </g>
          <g filter="url(#filter24_d)">
          <path
            className="building"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M945.903 833.435L962.916 831.219L960.133 809.874L943.114 812.099L945.903 833.435Z"
            fill={buildColor}
            stroke={buildStrokeColor}
            strokeWidth={buildStrokeWidth}
          />
          </g>
          <g filter="url(#filter25_d)">
          <rect
            className="marker"
            x="851.878"
            y="784.502"
            width="92"
            height="23"
            rx="3"
            fill="white"
          />
          </g>
          <g filter="url(#filter26_d)">
          <path
            className="arrow"
            d="M897.298 813.688C896.91 814.064 896.293 814.064 895.905 813.688L887.547 805.581C886.902 804.956 887.345 803.864 888.244 803.864L904.96 803.864C905.858 803.864 906.301 804.956 905.656 805.581L897.298 813.688Z"
            fill="white"
          />
          </g>
          <path
            d="M876.103 796.146H872.956V798.719H876.612V799.502H871.998V792.241H876.562V793.029H872.956V795.363H876.103V796.146ZM878.532 794.106L878.562 794.784C878.974 794.266 879.513 794.006 880.177 794.006C881.318 794.006 881.893 794.65 881.903 795.937V799.502H880.98V795.932C880.977 795.543 880.887 795.255 880.711 795.069C880.538 794.883 880.267 794.789 879.898 794.789C879.599 794.789 879.336 794.869 879.11 795.029C878.884 795.188 878.708 795.398 878.582 795.657V799.502H877.659V794.106H878.532ZM883.075 796.759C883.075 795.918 883.27 795.25 883.659 794.755C884.048 794.256 884.563 794.006 885.205 794.006C885.863 794.006 886.377 794.239 886.746 794.705L886.791 794.106H887.634V799.373C887.634 800.071 887.426 800.621 887.01 801.024C886.598 801.426 886.043 801.627 885.344 801.627C884.955 801.627 884.575 801.544 884.202 801.378C883.83 801.211 883.546 800.984 883.349 800.694L883.828 800.141C884.224 800.63 884.708 800.874 885.279 800.874C885.728 800.874 886.077 800.748 886.327 800.495C886.58 800.242 886.706 799.886 886.706 799.428V798.964C886.337 799.389 885.833 799.602 885.195 799.602C884.563 799.602 884.051 799.348 883.659 798.839C883.27 798.33 883.075 797.637 883.075 796.759ZM884.003 796.864C884.003 797.473 884.127 797.951 884.377 798.3C884.626 798.646 884.975 798.819 885.424 798.819C886.006 798.819 886.433 798.555 886.706 798.026V795.562C886.423 795.047 885.999 794.789 885.434 794.789C884.985 794.789 884.634 794.964 884.382 795.313C884.129 795.662 884.003 796.179 884.003 796.864ZM890.032 799.502H889.11V794.106H890.032V799.502ZM889.035 792.675C889.035 792.525 889.08 792.399 889.17 792.296C889.263 792.193 889.399 792.141 889.579 792.141C889.758 792.141 889.894 792.193 889.988 792.296C890.081 792.399 890.127 792.525 890.127 792.675C890.127 792.824 890.081 792.949 889.988 793.049C889.894 793.149 889.758 793.198 889.579 793.198C889.399 793.198 889.263 793.149 889.17 793.049C889.08 792.949 889.035 792.824 889.035 792.675ZM892.386 794.106L892.416 794.784C892.829 794.266 893.367 794.006 894.032 794.006C895.173 794.006 895.748 794.65 895.758 795.937V799.502H894.835V795.932C894.832 795.543 894.742 795.255 894.566 795.069C894.393 794.883 894.122 794.789 893.753 794.789C893.454 794.789 893.191 794.869 892.965 795.029C892.739 795.188 892.563 795.398 892.436 795.657V799.502H891.514V794.106H892.386ZM899.389 799.602C898.657 799.602 898.062 799.363 897.603 798.884C897.144 798.402 896.915 797.759 896.915 796.954V796.784C896.915 796.249 897.016 795.772 897.219 795.353C897.425 794.931 897.711 794.602 898.077 794.366C898.446 794.126 898.845 794.006 899.274 794.006C899.975 794.006 900.521 794.238 900.91 794.7C901.299 795.162 901.493 795.823 901.493 796.685V797.069H897.838C897.851 797.601 898.005 798.031 898.301 798.36C898.601 798.686 898.98 798.849 899.438 798.849C899.764 798.849 900.04 798.783 900.266 798.65C900.492 798.517 900.69 798.34 900.86 798.121L901.423 798.56C900.971 799.255 900.293 799.602 899.389 799.602ZM899.274 794.764C898.902 794.764 898.589 794.901 898.336 795.173C898.084 795.443 897.927 795.822 897.867 796.311H900.571V796.241C900.544 795.772 900.418 795.41 900.192 795.154C899.965 794.894 899.66 794.764 899.274 794.764ZM904.805 799.602C904.073 799.602 903.478 799.363 903.019 798.884C902.561 798.402 902.331 797.759 902.331 796.954V796.784C902.331 796.249 902.433 795.772 902.635 795.353C902.841 794.931 903.127 794.602 903.493 794.366C903.862 794.126 904.261 794.006 904.69 794.006C905.392 794.006 905.937 794.238 906.326 794.7C906.715 795.162 906.909 795.823 906.909 796.685V797.069H903.254C903.267 797.601 903.422 798.031 903.718 798.36C904.017 798.686 904.396 798.849 904.855 798.849C905.181 798.849 905.456 798.783 905.683 798.65C905.909 798.517 906.107 798.34 906.276 798.121L906.84 798.56C906.387 799.255 905.709 799.602 904.805 799.602ZM904.69 794.764C904.318 794.764 904.005 794.901 903.752 795.173C903.5 795.443 903.344 795.822 903.284 796.311H905.987V796.241C905.96 795.772 905.834 795.41 905.608 795.154C905.382 794.894 905.076 794.764 904.69 794.764ZM910.59 794.934C910.45 794.911 910.299 794.899 910.136 794.899C909.531 794.899 909.121 795.157 908.904 795.672V799.502H907.982V794.106H908.879L908.894 794.73C909.197 794.247 909.626 794.006 910.181 794.006C910.361 794.006 910.497 794.03 910.59 794.076V794.934ZM912.445 799.502H911.523V794.106H912.445V799.502ZM911.448 792.675C911.448 792.525 911.493 792.399 911.583 792.296C911.676 792.193 911.812 792.141 911.992 792.141C912.171 792.141 912.307 792.193 912.4 792.296C912.494 792.399 912.54 792.525 912.54 792.675C912.54 792.824 912.494 792.949 912.4 793.049C912.307 793.149 912.171 793.198 911.992 793.198C911.812 793.198 911.676 793.149 911.583 793.049C911.493 792.949 911.448 792.824 911.448 792.675ZM914.799 794.106L914.829 794.784C915.242 794.266 915.78 794.006 916.445 794.006C917.586 794.006 918.161 794.65 918.171 795.937V799.502H917.248V795.932C917.245 795.543 917.155 795.255 916.979 795.069C916.806 794.883 916.535 794.789 916.166 794.789C915.867 794.789 915.604 794.869 915.378 795.029C915.152 795.188 914.976 795.398 914.849 795.657V799.502H913.927V794.106H914.799ZM919.343 796.759C919.343 795.918 919.537 795.25 919.926 794.755C920.315 794.256 920.831 794.006 921.472 794.006C922.131 794.006 922.644 794.239 923.013 794.705L923.058 794.106H923.901V799.373C923.901 800.071 923.693 800.621 923.278 801.024C922.866 801.426 922.31 801.627 921.612 801.627C921.223 801.627 920.842 801.544 920.47 801.378C920.098 801.211 919.813 800.984 919.617 800.694L920.096 800.141C920.492 800.63 920.975 800.874 921.547 800.874C921.996 800.874 922.345 800.748 922.595 800.495C922.847 800.242 922.974 799.886 922.974 799.428V798.964C922.605 799.389 922.101 799.602 921.462 799.602C920.831 799.602 920.319 799.348 919.926 798.839C919.537 798.33 919.343 797.637 919.343 796.759ZM920.27 796.864C920.27 797.473 920.395 797.951 920.645 798.3C920.894 798.646 921.243 798.819 921.692 798.819C922.274 798.819 922.701 798.555 922.974 798.026V795.562C922.691 795.047 922.267 794.789 921.702 794.789C921.253 794.789 920.902 794.964 920.65 795.313C920.397 795.662 920.27 796.179 920.27 796.864Z"
            fill={textColor}
          />
        </g>
        <g
          className="selectable"
          onClick={() => handleBuildingSelect("BLDG_1")}
        >
          <g filter="url(#filter27_d)">
          <path
            className="building"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M789.895 737.52L798.951 746.114L798.506 768.469L802.443 772.352L803.447 797.481L806.035 797.499L815.355 789.249L816.446 812.003L830.705 811.942L829.314 752.698L853.319 745.566L845.981 717.818L823.943 723.903L823.151 726.078L815.778 728.258L806.73 719.461L792.874 720.15L789.523 723.316L789.895 737.52Z"
            fill={buildColor}
            stroke={buildStrokeColor}
            strokeWidth={buildStrokeWidth}
          />
          </g>
          <g filter="url(#filter28_d)">
          <rect
            className="marker"
            x="773.002"
            y="741"
            width="92"
            height="23"
            rx="3"
            fill="white"
          />
          </g>
          <g filter="url(#filter29_d)">
          <path
            className="arrow"
            d="M818.422 770.186C818.034 770.562 817.418 770.562 817.03 770.186L808.672 762.079C808.027 761.453 808.47 760.361 809.368 760.361L826.084 760.361C826.982 760.361 827.425 761.453 826.78 762.079L818.422 770.186Z"
            fill="white"
          />
          </g>
          <path
            d="M793.587 756H792.624L788.968 750.404V756H788.006V748.738H788.968L792.634 754.359V748.738H793.587V756ZM797.382 756.1C796.65 756.1 796.055 755.86 795.597 755.382C795.138 754.899 794.908 754.256 794.908 753.451V753.282C794.908 752.747 795.01 752.269 795.212 751.851C795.419 751.428 795.705 751.099 796.07 750.863C796.439 750.624 796.838 750.504 797.267 750.504C797.969 750.504 798.514 750.735 798.903 751.197C799.292 751.659 799.487 752.321 799.487 753.182V753.566H795.831C795.844 754.098 795.999 754.529 796.295 754.858C796.594 755.184 796.973 755.347 797.432 755.347C797.758 755.347 798.034 755.28 798.26 755.147C798.486 755.014 798.684 754.838 798.853 754.619L799.417 755.057C798.965 755.752 798.286 756.1 797.382 756.1ZM797.267 751.262C796.895 751.262 796.582 751.398 796.33 751.671C796.077 751.94 795.921 752.319 795.861 752.808H798.564V752.738C798.537 752.269 798.411 751.907 798.185 751.651C797.959 751.392 797.653 751.262 797.267 751.262ZM805.337 754.728L806.374 750.604H807.297L805.726 756H804.978L803.666 751.91L802.389 756H801.641L800.075 750.604H800.993L802.055 754.643L803.312 750.604H804.055L805.337 754.728ZM816.498 756H815.536V752.644H811.875V756H810.918V748.738H811.875V751.861H815.536V748.738H816.498V756ZM817.81 753.252C817.81 752.723 817.913 752.248 818.119 751.826C818.329 751.403 818.618 751.078 818.987 750.848C819.359 750.619 819.783 750.504 820.259 750.504C820.994 750.504 821.587 750.758 822.039 751.267C822.495 751.776 822.722 752.452 822.722 753.297V753.362C822.722 753.887 822.621 754.359 822.418 754.778C822.219 755.194 821.931 755.518 821.555 755.751C821.183 755.983 820.754 756.1 820.269 756.1C819.537 756.1 818.944 755.845 818.488 755.337C818.036 754.828 817.81 754.155 817.81 753.317V753.252ZM818.738 753.362C818.738 753.96 818.876 754.441 819.152 754.803C819.431 755.165 819.803 755.347 820.269 755.347C820.738 755.347 821.11 755.164 821.386 754.798C821.662 754.429 821.8 753.914 821.8 753.252C821.8 752.66 821.659 752.181 821.376 751.816C821.097 751.447 820.724 751.262 820.259 751.262C819.803 751.262 819.436 751.443 819.157 751.806C818.877 752.168 818.738 752.687 818.738 753.362ZM826.488 751.432C826.348 751.408 826.197 751.397 826.034 751.397C825.429 751.397 825.018 751.654 824.802 752.17V756H823.88V750.604H824.777L824.792 751.227C825.095 750.745 825.524 750.504 826.079 750.504C826.258 750.504 826.395 750.527 826.488 750.574V751.432ZM828.343 756H827.421V750.604H828.343V756ZM827.346 749.172C827.346 749.023 827.391 748.896 827.48 748.793C827.573 748.69 827.71 748.639 827.889 748.639C828.069 748.639 828.205 748.69 828.298 748.793C828.391 748.896 828.438 749.023 828.438 749.172C828.438 749.322 828.391 749.447 828.298 749.546C828.205 749.646 828.069 749.696 827.889 749.696C827.71 749.696 827.573 749.646 827.48 749.546C827.391 749.447 827.346 749.322 827.346 749.172ZM830.692 755.247H833.849V756H829.565V755.322L832.542 751.367H829.61V750.604H833.7V751.257L830.692 755.247ZM834.567 753.252C834.567 752.723 834.67 752.248 834.877 751.826C835.086 751.403 835.375 751.078 835.744 750.848C836.117 750.619 836.541 750.504 837.016 750.504C837.751 750.504 838.344 750.758 838.797 751.267C839.252 751.776 839.48 752.452 839.48 753.297V753.362C839.48 753.887 839.378 754.359 839.176 754.778C838.976 755.194 838.689 755.518 838.313 755.751C837.94 755.983 837.512 756.1 837.026 756.1C836.295 756.1 835.701 755.845 835.246 755.337C834.793 754.828 834.567 754.155 834.567 753.317V753.252ZM835.495 753.362C835.495 753.96 835.633 754.441 835.909 754.803C836.188 755.165 836.561 755.347 837.026 755.347C837.495 755.347 837.867 755.164 838.143 754.798C838.419 754.429 838.557 753.914 838.557 753.252C838.557 752.66 838.416 752.181 838.133 751.816C837.854 751.447 837.482 751.262 837.016 751.262C836.561 751.262 836.193 751.443 835.914 751.806C835.635 752.168 835.495 752.687 835.495 753.362ZM841.51 750.604L841.54 751.282C841.952 750.763 842.491 750.504 843.155 750.504C844.296 750.504 844.871 751.147 844.881 752.434V756H843.958V752.429C843.955 752.04 843.865 751.752 843.689 751.566C843.516 751.38 843.245 751.287 842.876 751.287C842.577 751.287 842.314 751.367 842.088 751.526C841.862 751.686 841.686 751.895 841.56 752.155V756H840.637V750.604H841.51ZM849.415 754.569C849.415 754.319 849.32 754.126 849.13 753.99C848.944 753.85 848.617 753.731 848.148 753.631C847.682 753.531 847.312 753.412 847.036 753.272C846.763 753.132 846.56 752.966 846.427 752.773C846.298 752.58 846.233 752.351 846.233 752.085C846.233 751.643 846.419 751.269 846.791 750.963C847.167 750.657 847.646 750.504 848.228 750.504C848.839 750.504 849.335 750.662 849.714 750.978C850.096 751.294 850.287 751.698 850.287 752.19H849.36C849.36 751.937 849.252 751.719 849.036 751.536C848.823 751.353 848.553 751.262 848.228 751.262C847.892 751.262 847.629 751.335 847.44 751.481C847.25 751.628 847.155 751.819 847.155 752.055C847.155 752.278 847.243 752.446 847.42 752.559C847.596 752.672 847.913 752.78 848.372 752.883C848.834 752.986 849.208 753.109 849.494 753.252C849.78 753.395 849.991 753.568 850.128 753.771C850.267 753.97 850.337 754.215 850.337 754.504C850.337 754.986 850.144 755.373 849.759 755.666C849.373 755.955 848.873 756.1 848.258 756.1C847.825 756.1 847.443 756.023 847.11 755.87C846.778 755.717 846.517 755.505 846.327 755.232C846.141 754.956 846.048 754.658 846.048 754.339H846.971C846.987 754.648 847.11 754.894 847.34 755.077C847.573 755.257 847.878 755.347 848.258 755.347C848.607 755.347 848.886 755.277 849.095 755.137C849.308 754.994 849.415 754.805 849.415 754.569Z"
            fill={textColor}
          />
        </g>
        <circle
          ref={focus}
          cx="900.794"
          cy="973.184"
          r="4.60034"
          transform="rotate(-99.8473 900.794 973.184)"
          fill="#C4C4C4"
          fill-opacity="0.0"
        />
        <path
          d="M722.411 1100.94L722.417 1101.08C722.498 1100.97 722.603 1100.92 722.733 1100.92C722.957 1100.92 723.069 1101.05 723.071 1101.3V1102H722.891V1101.3C722.89 1101.22 722.872 1101.17 722.838 1101.13C722.804 1101.1 722.751 1101.08 722.679 1101.08C722.62 1101.08 722.569 1101.09 722.524 1101.12C722.48 1101.16 722.446 1101.2 722.421 1101.25V1102H722.24V1100.94H722.411ZM723.854 1101.11C723.827 1101.1 723.798 1101.1 723.766 1101.1C723.647 1101.1 723.567 1101.15 723.524 1101.25V1102H723.344V1100.94H723.52L723.522 1101.07C723.582 1100.97 723.666 1100.92 723.774 1100.92C723.81 1100.92 723.836 1100.93 723.854 1100.94V1101.11ZM724.426 1101.87C724.49 1101.87 724.547 1101.85 724.595 1101.81C724.643 1101.77 724.67 1101.73 724.675 1101.67H724.846C724.842 1101.73 724.822 1101.79 724.783 1101.84C724.745 1101.89 724.693 1101.94 724.629 1101.97C724.565 1102 724.497 1102.02 724.426 1102.02C724.282 1102.02 724.167 1101.97 724.082 1101.88C723.997 1101.78 723.955 1101.65 723.955 1101.48V1101.45C723.955 1101.35 723.974 1101.26 724.012 1101.18C724.049 1101.1 724.104 1101.03 724.174 1100.99C724.245 1100.95 724.328 1100.92 724.425 1100.92C724.543 1100.92 724.642 1100.96 724.72 1101.03C724.799 1101.1 724.84 1101.19 724.846 1101.31H724.675C724.67 1101.24 724.644 1101.18 724.597 1101.14C724.55 1101.09 724.493 1101.07 724.425 1101.07C724.333 1101.07 724.262 1101.11 724.211 1101.17C724.161 1101.24 724.136 1101.33 724.136 1101.46V1101.49C724.136 1101.61 724.161 1101.71 724.211 1101.77C724.261 1101.84 724.333 1101.87 724.426 1101.87ZM725.229 1101.07C725.31 1100.97 725.414 1100.92 725.542 1100.92C725.765 1100.92 725.878 1101.05 725.88 1101.3V1102H725.699V1101.3C725.699 1101.22 725.681 1101.17 725.646 1101.13C725.613 1101.1 725.56 1101.08 725.487 1101.08C725.429 1101.08 725.377 1101.09 725.333 1101.12C725.289 1101.16 725.254 1101.2 725.229 1101.25V1102H725.049V1100.5H725.229V1101.07ZM726.32 1100.94L726.325 1101.06C726.403 1100.97 726.507 1100.92 726.639 1100.92C726.786 1100.92 726.887 1100.98 726.94 1101.09C726.976 1101.04 727.021 1101 727.077 1100.97C727.134 1100.94 727.201 1100.92 727.277 1100.92C727.509 1100.92 727.627 1101.05 727.631 1101.29V1102H727.45V1101.3C727.45 1101.23 727.433 1101.17 727.398 1101.13C727.364 1101.1 727.306 1101.08 727.225 1101.08C727.158 1101.08 727.102 1101.1 727.058 1101.14C727.013 1101.18 726.988 1101.23 726.98 1101.3V1102H726.799V1101.31C726.799 1101.15 726.724 1101.08 726.573 1101.08C726.455 1101.08 726.374 1101.13 726.33 1101.23V1102H726.149V1100.94H726.32ZM728.101 1102H727.92V1100.94H728.101V1102ZM727.905 1100.66C727.905 1100.63 727.914 1100.61 727.932 1100.59C727.95 1100.57 727.977 1100.56 728.012 1100.56C728.047 1100.56 728.074 1100.57 728.092 1100.59C728.11 1100.61 728.119 1100.63 728.119 1100.66C728.119 1100.69 728.11 1100.72 728.092 1100.74C728.074 1100.76 728.047 1100.77 728.012 1100.77C727.977 1100.77 727.95 1100.76 727.932 1100.74C727.914 1100.72 727.905 1100.69 727.905 1100.66ZM728.829 1102.02C728.686 1102.02 728.569 1101.97 728.479 1101.88C728.39 1101.78 728.345 1101.66 728.345 1101.5V1101.47C728.345 1101.36 728.365 1101.27 728.404 1101.19C728.445 1101.1 728.501 1101.04 728.572 1100.99C728.645 1100.95 728.723 1100.92 728.807 1100.92C728.944 1100.92 729.051 1100.97 729.127 1101.06C729.203 1101.15 729.241 1101.28 729.241 1101.45V1101.52H728.525C728.528 1101.63 728.558 1101.71 728.616 1101.78C728.675 1101.84 728.749 1101.87 728.839 1101.87C728.903 1101.87 728.957 1101.86 729.001 1101.83C729.045 1101.81 729.084 1101.77 729.117 1101.73L729.228 1101.82C729.139 1101.95 729.006 1102.02 728.829 1102.02ZM728.807 1101.07C728.734 1101.07 728.673 1101.1 728.623 1101.15C728.574 1101.21 728.543 1101.28 728.531 1101.38H729.061V1101.36C729.055 1101.27 729.031 1101.2 728.986 1101.15C728.942 1101.1 728.882 1101.07 728.807 1101.07ZM729.647 1102H729.467V1100.5H729.647V1102ZM730.376 1102.02C730.233 1102.02 730.116 1101.97 730.026 1101.88C729.937 1101.78 729.892 1101.66 729.892 1101.5V1101.47C729.892 1101.36 729.911 1101.27 729.951 1101.19C729.992 1101.1 730.048 1101.04 730.119 1100.99C730.191 1100.95 730.27 1100.92 730.354 1100.92C730.491 1100.92 730.598 1100.97 730.674 1101.06C730.75 1101.15 730.788 1101.28 730.788 1101.45V1101.52H730.072C730.075 1101.63 730.105 1101.71 730.163 1101.78C730.222 1101.84 730.296 1101.87 730.386 1101.87C730.45 1101.87 730.504 1101.86 730.548 1101.83C730.592 1101.81 730.631 1101.77 730.664 1101.73L730.774 1101.82C730.686 1101.95 730.553 1102.02 730.376 1102.02ZM730.354 1101.07C730.281 1101.07 730.219 1101.1 730.17 1101.15C730.12 1101.21 730.09 1101.28 730.078 1101.38H730.607V1101.36C730.602 1101.27 730.577 1101.2 730.533 1101.15C730.489 1101.1 730.429 1101.07 730.354 1101.07ZM731.934 1101.75L732.137 1100.94H732.317L732.01 1102H731.863L731.606 1101.2L731.356 1102H731.21L730.903 1100.94H731.083L731.291 1101.73L731.537 1100.94H731.683L731.934 1101.75ZM733.117 1101.72C733.117 1101.67 733.099 1101.63 733.062 1101.61C733.025 1101.58 732.961 1101.56 732.869 1101.54C732.778 1101.52 732.705 1101.49 732.651 1101.47C732.598 1101.44 732.558 1101.41 732.532 1101.37C732.507 1101.33 732.494 1101.29 732.494 1101.23C732.494 1101.15 732.531 1101.07 732.604 1101.01C732.677 1100.95 732.771 1100.92 732.885 1100.92C733.005 1100.92 733.102 1100.95 733.176 1101.02C733.251 1101.08 733.288 1101.16 733.288 1101.25H733.106C733.106 1101.2 733.085 1101.16 733.043 1101.13C733.001 1101.09 732.949 1101.07 732.885 1101.07C732.819 1101.07 732.768 1101.09 732.73 1101.12C732.693 1101.14 732.675 1101.18 732.675 1101.23C732.675 1101.27 732.692 1101.3 732.727 1101.33C732.761 1101.35 732.823 1101.37 732.913 1101.39C733.004 1101.41 733.077 1101.43 733.133 1101.46C733.189 1101.49 733.23 1101.52 733.257 1101.56C733.284 1101.6 733.298 1101.65 733.298 1101.71C733.298 1101.8 733.26 1101.88 733.185 1101.93C733.109 1101.99 733.011 1102.02 732.891 1102.02C732.806 1102.02 732.731 1102 732.666 1101.97C732.601 1101.94 732.55 1101.9 732.513 1101.85C732.476 1101.8 732.458 1101.74 732.458 1101.67H732.639C732.642 1101.74 732.666 1101.78 732.711 1101.82C732.757 1101.85 732.816 1101.87 732.891 1101.87C732.959 1101.87 733.014 1101.86 733.055 1101.83C733.096 1101.8 733.117 1101.77 733.117 1101.72ZM733.828 1101.51L733.715 1101.63V1102H733.534V1100.5H733.715V1101.41L733.812 1101.29L734.141 1100.94H734.36L733.949 1101.38L734.408 1102H734.196L733.828 1101.51ZM734.743 1102H734.562V1100.94H734.743V1102ZM734.548 1100.66C734.548 1100.63 734.557 1100.61 734.574 1100.59C734.592 1100.57 734.619 1100.56 734.654 1100.56C734.689 1100.56 734.716 1100.57 734.734 1100.59C734.753 1100.61 734.762 1100.63 734.762 1100.66C734.762 1100.69 734.753 1100.72 734.734 1100.74C734.716 1100.76 734.689 1100.77 734.654 1100.77C734.619 1100.77 734.592 1100.76 734.574 1100.74C734.557 1100.72 734.548 1100.69 734.548 1100.66Z"
          fill="#C2F3C6"
        />
        <defs>
          <filter
            id="filter0_d"
            x="852.675"
            y="1147.43"
            width="88.9481"
            height="111.773"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d"
            x="839.001"
            y="1173"
            width="114"
            height="39"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d"
            x="881.141"
            y="1200.5"
            width="26.7201"
            height="18.1069"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_d"
            x="828.159"
            y="1070.85"
            width="117.185"
            height="77.4724"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_d"
            x="847.001"
            y="1071"
            width="82"
            height="34"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter5_d"
            x="874.141"
            y="1093.55"
            width="26.7201"
            height="18.1069"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter6_d"
            x="816.393"
            y="1113.01"
            width="57.088"
            height="58.1226"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter7_d"
            x="797"
            y="1113"
            width="98"
            height="32"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter8_d"
            x="831.366"
            y="1133.36"
            width="26.7201"
            height="18.1069"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter9_d"
            x="823.584"
            y="989.689"
            width="131.838"
            height="96.8575"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter10_d"
            x="848.001"
            y="1011"
            width="77"
            height="39"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter11_d"
            x="873.365"
            y="1038.55"
            width="26.7201"
            height="18.1069"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter12_d"
            x="960.331"
            y="1083.32"
            width="71.7051"
            height="72.2012"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter13_d"
            x="950.001"
            y="1089"
            width="76"
            height="39"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter14_d"
            x="975.365"
            y="1116.55"
            width="26.7201"
            height="18.1069"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter15_d"
            x="1061.18"
            y="954.785"
            width="133.43"
            height="199.451"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter16_d"
            x="1088.36"
            y="1020.46"
            width="76"
            height="39"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter17_d"
            x="1113.73"
            y="1048.01"
            width="26.7201"
            height="18.1069"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter18_d"
            x="785.226"
            y="865.732"
            width="55.278"
            height="56.2475"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter19_d"
            x="756.226"
            y="850.861"
            width="114"
            height="39"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter20_d"
            x="798.366"
            y="878.361"
            width="26.7201"
            height="18.1069"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter21_d"
            x="836"
            y="934"
            width="105"
            height="39"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter22_d"
            x="873.364"
            y="961.361"
            width="26.7201"
            height="18.1069"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter23_d"
            x="846.602"
            y="761.793"
            width="120.971"
            height="92.8809"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter24_d"
            x="938.043"
            y="808.931"
            width="29.9511"
            height="33.4557"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter25_d"
            x="847.878"
            y="784.502"
            width="100"
            height="31"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter26_d"
            x="883.242"
            y="803.864"
            width="26.7201"
            height="18.1069"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter27_d"
            x="782.601"
            y="710.255"
            width="85.7143"
            height="114.881"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter28_d"
            x="769.002"
            y="741"
            width="100"
            height="31"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter29_d"
            x="804.366"
            y="760.361"
            width="26.7201"
            height="18.1069"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 60 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </Fade>
  );
};

export default MapSVG;
