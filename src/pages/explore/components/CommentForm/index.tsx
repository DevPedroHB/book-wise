import { Avatar } from "@/components/Avatar";
import { Rating } from "@/components/Rating";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, X } from "phosphor-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CommentFormAction,
  CommentFormComponent,
  CommentFormHeader,
  CommentFormWrapper,
} from "./styles";

const CommentFormSchema = z.object({
  rating: z
    .number()
    .min(1, "Avaliação obrigatória.")
    .refine((val) => val > 0, "Avaliação obrigatória."),
  comment: z
    .string()
    .min(3, "O comentário deve ter pelo menos 3 caracteres.")
    .max(450, "O comentário deve ter no máximo 450 caracteres."),
});

export type CommentFormData = z.infer<typeof CommentFormSchema>;

interface ICommentForm {
  setNewFormComment: Dispatch<SetStateAction<boolean>>;
}

export function CommentForm({ setNewFormComment }: ICommentForm) {
  const [rating, setRating] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting, isValidating },
  } = useForm<CommentFormData>({
    resolver: zodResolver(CommentFormSchema),
  });

  function countCharacters() {
    const comment = watch("comment");

    if (comment) {
      return comment.match(/./g)!.length;
    } else {
      return 0;
    }
  }

  function handleNewComment(data: CommentFormData) {
    console.log(data);

    reset();
    setRating(0);
  }

  useEffect(() => {
    setValue("rating", rating);
  }, [rating]);

  return (
    <CommentFormComponent>
      <CommentFormHeader>
        <Avatar
          avatarSize={40}
          imgUrl="https://github.com/DevPedroHB.png"
          altText="Avatar de DevPedroHB"
        />
        <h4>Pedro Henrique</h4>
        <Rating
          starSize={28}
          rating={rating}
          setRating={setRating}
          error={!!errors.rating}
        />
      </CommentFormHeader>
      <CommentFormWrapper
        onSubmit={handleSubmit(handleNewComment)}
        error={!!errors.comment}
      >
        <textarea
          placeholder="Escreva sua avaliação"
          {...register("comment")}
        ></textarea>
        <span>{countCharacters()}/450</span>
        <CommentFormAction>
          <button type="button" onClick={() => setNewFormComment(false)}>
            <X size={24} color="#8381D9" weight="bold" />
          </button>
          <button type="submit" disabled={isSubmitting}>
            <Check size={24} color="#50B2C0" weight="bold" />
          </button>
        </CommentFormAction>
      </CommentFormWrapper>
    </CommentFormComponent>
  );
}
