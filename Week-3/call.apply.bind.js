const projectOne = {
  id: 239847,
  projectCode: "AISUH",
  startDate: "03/01/2022",
};

const projectTwo = {
  id: 989799,
  projectCode: "IUHGA",
  startDate: "08/06/2022",
};

const projectThree = {
  id: 926874,
  projectCode: "WIEUP",
  startDate: "22/05/2022",
};

function getProjectInfo(loc1, loc2, loc3) {
  console.log(
    `Project ${this.projectCode}'s starts from ${this.startDate} and belongs ${loc1}, ${loc2} and ${loc3}`
  );
}

const locations = ["Bangalore", "Mumbai", "Delhi"];

getProjectInfo.call(projectOne, locations[0], locations[1], locations[2]);

getProjectInfo.apply(projectTwo, locations);

const newGetProjectInfo = getProjectInfo.bind(
  projectThree,
  locations[0],
  locations[1],
  locations[2]
);
newGetProjectInfo();
