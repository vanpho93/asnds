export enum ECoordinateSystem {
  CARTESIAN = 'CARTESIAN',
  POLAR = 'POLAR',
};

export class Point {
  constructor(private x: number, private y: number) {}

  static get factory () {
    return PointFactory
  }
}

export class PointFactory {
  static newPolarPoint(rho: number, theta: number) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }

  static newCartesianPoint(x: number, y: number) {
    return new Point(x, y);
  }
}
