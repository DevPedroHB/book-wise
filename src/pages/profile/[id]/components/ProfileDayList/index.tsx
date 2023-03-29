import { Rating } from "@/components/Rating";
import Image from "next/image";
import {
  ProfileDayListBookDetails,
  ProfileDayListCard,
  ProfileDayListCardHeader,
  ProfileDayListComponent,
  ProfileDayListDate,
  ProfileDayListWrapper,
} from "./styles";

export function ProfileDayList() {
  return (
    <ProfileDayListComponent>
      <ProfileDayListDate>Há 2 dias</ProfileDayListDate>
      <ProfileDayListWrapper>
        {new Array(1).fill(true).map((_, i) => (
          <ProfileDayListCard>
            <ProfileDayListCardHeader>
              <Image
                src="/images/codigo-limpo.png"
                width={98}
                height={134}
                alt="Imagem de capa do livro ..."
              />
              <ProfileDayListBookDetails>
                <div>
                  <h4>Entendendo Algorítimos</h4>
                  <span>Aditya Bhargava</span>
                </div>
                <Rating starSize={16} rating={4} />
              </ProfileDayListBookDetails>
            </ProfileDayListCardHeader>
            <p>
              Tristique massa sed enim lacinia odio. Congue ut faucibus nunc
              vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla
              ut et suspendisse enim suspendisse vitae. Leo non eget lacus
              sollicitudin tristique pretium quam. Mollis et luctus amet sed
              convallis varius massa sagittis. Proin sed proin at leo quis ac
              sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum
              enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod
              vitae ut turpis. Aliquam amet integer pellentesque.
            </p>
          </ProfileDayListCard>
        ))}
      </ProfileDayListWrapper>
    </ProfileDayListComponent>
  );
}
