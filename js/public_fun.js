function getParamQueryString(param,name) {
         var reg = new RegExp("(^|&?)" + name + "=([^&]*)");
         var r = param.match(reg);
         if (r != null)
             return r[2];
         return null;
}
