type ТипОдногоДоговора = {
  Index: string;
  Номер: string;
  Дата: string;
};

type MassivDogovorovType = ТипОдногоДоговора[];

// так как договоров этих много, то обозначаем тип как массив договоров MassivDogovorovType[]
// каждый из которых содержит Дату, Номер итд..
