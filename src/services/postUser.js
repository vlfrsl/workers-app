
export const postUser = async (data) => {
    console.log("DATA to post", data)
    return await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users`,{
            method : "POST",
            headers: {
                // "Content-Type": "multipart/form-data; boundary=something",
                'Token': "eyJpdiI6ImZoWmJwXC9LWVBDSEpRcUpwTExNTVlBPT0iLCJ2YWx1ZSI6IkJEV2krZmxlYlVOSm9IRXA5Zzc2QXdxXC9LVnk3ZlZuaURjazB5YnlERDRRMVViYk1XbExPdDJ1MWY0azhVSUhoZ08reXA4NWNzemxhV2UxVE41UlBPUT09IiwibWFjIjoiZDc5MDgyNGMzNjFkOTZhMTIwNTEyYzQxMzVmYTgwNTE5NjNjMGJhNTA5YjNiYTg0ZDg0YTA1ZDM2YjcwMzJmYSJ9",
            },

            body: data,//JSON.stringify({
                // name: "TEST name",
                // email: "testemail@gmail.com",
                // phone: "+380995627833",
                // position_id: 2,
                // photo:  data,
            //})
        }
    ).then((response) => {
        // if (response.status !== 200) {
        //   throw Error;
        // }
        let j = response.json()
        console.log("resp", j)
        return j;
    });
};