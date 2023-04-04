import { Avatar } from "@/components/Avatar";
import { Rating } from "@/components/Rating";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, CircleNotch, X } from "phosphor-react";
import { Dispatch, SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import {
  CommentFormAction,
  CommentFormComponent,
  CommentFormHeader,
  CommentFormWrapper,
} from "./styles";

const CommentFormSchema = z.object({
  rating: z.number().min(1, "Avaliação obrigatória."),
  comment: z
    .string()
    .min(3, "O comentário deve ter pelo menos 3 caracteres.")
    .max(450, "O comentário deve ter no máximo 450 caracteres."),
});

export type CommentFormData = z.infer<typeof CommentFormSchema>;

interface ICommentForm {
  setNewFormComment: Dispatch<SetStateAction<boolean>>;
}

async function delay(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms * 1000));
}

export function CommentForm({ setNewFormComment }: ICommentForm) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CommentFormData>({
    resolver: zodResolver(CommentFormSchema),
  });

  function countCharacters() {
    const comment = watch("comment");

    return comment ? comment.match(/./g)!.length : 0;
  }

  async function handleNewComment(data: CommentFormData) {
    await delay(2);

    console.log(data);

    reset();
    setNewFormComment(false);
  }

  return (
    <CommentFormComponent>
      <CommentFormHeader>
        <Avatar
          avatarSize={40}
          imgUrl="https://github.com/DevPedroHB.png"
          altText="Avatar de DevPedroHB"
        />
        <h4>Pedro Henrique</h4>
        <Controller
          name="rating"
          control={control}
          render={({ field }) => {
            return (
              <Rating
                starSize={28}
                rating={field.value}
                error={!!errors.rating}
                onChange={(rating) => field.onChange(rating)}
              />
            );
          }}
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
        <CommentFormAction isSubmitting={isSubmitting}>
          <button type="button" onClick={() => setNewFormComment(false)}>
            <X size={24} color="#8381D9" weight="bold" />
          </button>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <CircleNotch size={24} color="#50B2C0" weight="bold" />
            ) : (
              <Check size={24} color="#50B2C0" weight="bold" />
            )}
          </button>
        </CommentFormAction>
      </CommentFormWrapper>
    </CommentFormComponent>
  );
}
