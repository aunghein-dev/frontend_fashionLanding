declare module "color-namer" {
  interface NamerResultSet {
    name: string;
    distance: number;
  }

  interface NamerResult {
    pantone: NamerResultSet[];
    ntc: NamerResultSet[];
    html: NamerResultSet[];
  }

  function namer(hex: string): NamerResult;

  export default namer;
}
