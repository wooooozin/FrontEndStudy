export default function (data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

// 하나의 모듈에서 하나의 기본 default만 가능